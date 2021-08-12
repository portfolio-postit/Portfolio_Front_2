import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./page/main/MainPage";
import AboutPage from "./page/about/AboutPage";
const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </>
  );
};
export default Routing;
