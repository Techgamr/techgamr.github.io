import React from "react";
import styles from "./app.module.scss";

export default class App extends React.Component<{}, {}>{
    render() {
        return (
            <div className={styles.app}>
                <h1 className={styles.appText}>Hi 👋</h1>
            </div>
        );
    }
}
