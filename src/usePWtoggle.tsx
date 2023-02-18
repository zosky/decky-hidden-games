import { PanelSectionRow, ToggleField, TextField, Router, ButtonItem } from "decky-frontend-lib";
import { useState, VFC } from "react";
import { FaKey } from "react-icons/fa";

export const PluginSettings: VFC = () => {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");

  return (
    <div style={{ marginTop: "50px", color: "aqua" }}>
      <PanelSectionRow>
        <div>this toggle the PW textField, thats all, for now :)</div>
        <ToggleField
          label="use a password"
          // description={checked?'on':'off'}
          checked={checked}
          onChange={(e) => setChecked(e)}
          icon={<FaKey style={{ display: "block" }} />}
        />
        { checked &&
          <TextField
              label="password"
              description={`Value: ${text}`}
              value={text}
              disabled={!checked}
              onChange={(e) => setText(e?.target.value)}
          />
        }
      </PanelSectionRow>
      <PanelSectionRow>
        <div>make it so ...</div>
        <ButtonItem onClick={() => Router.Navigate("/library/collection/hidden")}>
          goTime
        </ButtonItem>
      </PanelSectionRow>
    </div>
  );
};
