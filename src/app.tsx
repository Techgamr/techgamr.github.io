import React from "react";
import styles from "./app.module.scss";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

export const headerText = "Hi 👋";

export default class App extends React.Component<{}, {}>{
    render() {
        return (
            <BrowserRouter>
                <div className={styles.app}>
                    <Link className={styles.headerLink} to={"/"}>Home</Link>
                    <Link className={styles.headerLink} to={"/about"}>About</Link>
                </div>

                <Switch>
                    <Route exact path={"/"}>
                        <Homepage/>
                    </Route>
                    <Route path={"/about"}>
                        <About/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
