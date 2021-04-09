import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Header from "./header";

export const headerText = "Hi 👋";

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={"/"}>
            <Homepage />
          </Route>
          <Route path={"/about"}>
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
