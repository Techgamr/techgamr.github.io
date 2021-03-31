import React from "react";
import styles from "./Homepage.module.scss";
import {headerText} from "../app";

export default class Homepage extends React.Component {
    render() {
        return (
            <div className={styles.homepage}>
                <h1 className={styles.appText}>{headerText}</h1>
            </div>
        );
    }
};
