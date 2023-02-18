import {
  ButtonItem,
  definePlugin,
  PanelSection,
  PanelSectionRow,
  Router,
  ServerAPI,
  staticClasses,
} from "decky-frontend-lib";
import { VFC } from "react";
import { FaEyeSlash } from "react-icons/fa";

const Content: VFC<{ serverAPI: ServerAPI }> = ({}) => {

  const goTime = (v:string) => {
    Router.CloseSideMenus()
    Router.Navigate(v)
  }

  return (
    <PanelSection title="make it so">
      <PanelSectionRow>
        <ButtonItem layout="below" onClick={()=>goTime('/library/collection/hidden')} >
          goTime
        </ButtonItem>
      </PanelSectionRow>
    </PanelSection>
  );
};


export default definePlugin((serverApi: ServerAPI) => {

  return {
    title: <div className={staticClasses.Title}>hidden games</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaEyeSlash />,
  };
});
