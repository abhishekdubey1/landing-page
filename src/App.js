import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Screen1 from "./pages/Screen1";
import Screen2 from "./pages/Screen2";

import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Screen1 />
          </Route>
          <Route exact path="/route1">
            <Screen2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
