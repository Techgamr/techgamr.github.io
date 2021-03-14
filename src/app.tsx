import React from "react";
import styles from "./app.module.scss";

export const headerText = "Hi 👋";

export default class App extends React.Component<{}, {}>{
    render() {
        return (
            <div className={styles.app}>
                <h1 className={styles.appText}>{headerText}</h1>
            </div>
        );
    }
}
