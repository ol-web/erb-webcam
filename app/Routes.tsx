import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./constants/routes";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import CameraPage from "./containers/CameraPage";
import MenuBar from "./components/MenuBar";
import CreditsPage from "./containers/CreditsPage";

export default function Routes() {
  return (
    <App>
      <MenuBar />
      <Switch>
        <Route path={`${routes.COUNTER}:deviceId`} component={CameraPage} />
        <Route path={routes.CREDITS} component={CreditsPage} />
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
