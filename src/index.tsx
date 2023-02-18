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
import { PluginSettings } from "./usePWtoggle";

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
      <PanelSectionRow>
        <ButtonItem layout="below" onClick={()=>goTime('/hidden-collection-control')} >
          settings
        </ButtonItem>
      </PanelSectionRow> 
    </PanelSection>
  );
};

const DeckyPluginRouterTest: VFC = () => {
  return ( <PluginSettings /> );
};

export default definePlugin((serverApi: ServerAPI) => {
  serverApi.routerHook.addRoute("/hidden-collection-control", DeckyPluginRouterTest, {
    exact: true,
  });

  return {
    title: <div className={staticClasses.Title}>hidden games</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaEyeSlash />,
    onDismount() {
      serverApi.routerHook.removeRoute("/hidden-collection-control");
    },
  };
});
