import { ipcRenderer } from "electron";
import React, { Component } from "react";
import styles from "./MenuBar.css";
import Maximize from "../icons/Maximize";
import Minimize from "../icons/Minimize";
import Close from "../icons/Close";

class MenuBar extends Component {
  // static contextType = GameContext;
  minimizeWindow = () => {
    ipcRenderer.send("minimize");
  };
  maximizeWindow = () => {
    ipcRenderer.send("maximize");
  };
  exit = () => {
    ipcRenderer.send("exit");
  };
  render() {
    //  const { theme } = this.context;
    const theme = { text: "#ffffff" };

    return (
      <div className={styles.menuBar}>
        <h1 className={styles.menuBarTitle}>ERB Webcam</h1>
        <div className={styles.menuBarIcons}>
          <i
            role="button"
            className={styles.menuBarIcon}
            data-tclass="menuBarIcon"
            onClick={this.minimizeWindow}
          >
            <Minimize height="0.7em" width="0.7em" fill={theme.text} />
          </i>

          <i
            role="button"
            className={styles.menuBarIcon}
            onClick={this.maximizeWindow}
          >
            <Maximize height="0.7em" width="0.7em" fill={theme.text} />
          </i>

          <i role="button" className={styles.menuBarIcon} onClick={this.exit}>
            <Close height="0.7em" width="0.7em" fill={theme.text} />
          </i>
        </div>
      </div>
    );
  }
}

export default MenuBar;
