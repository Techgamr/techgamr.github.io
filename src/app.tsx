import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Header = React.lazy(() => import("./header"));
const Homepage = React.lazy(() => import("./pages/Homepage"));
const About = React.lazy(() => import("./pages/About"));

export const headerText = "Hi 👋";

const bodySuspenseFallback = (
  <div
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: "var(--bg-color)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    }}
  ></div>
);

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense
          fallback={
            <div
              style={{
                width: "100%",
                height: "36px",
                backgroundColor: "var(--bg-color)",
              }}
            ></div>
          }
        >
          <Header />
        </React.Suspense>
        <Switch>
          <Route exact path={"/"}>
            <React.Suspense fallback={bodySuspenseFallback}>
              <Homepage />
            </React.Suspense>
          </Route>
          <Route path={"/about"}>
            <React.Suspense fallback={bodySuspenseFallback}>
              <About />
            </React.Suspense>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
