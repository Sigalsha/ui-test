import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuContextProvider from "./contexts/MenuContext";
import { GlobalStyles } from "./styles/global";
import Landing from "./components/routeComponents/Landing";
import Workflow from "./components/routeComponents/workflow/Workflow";
import Header from "./components/header/Header";
import SideMenu from "./components/sideMenu/SideMenu";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <MenuContextProvider>
        <div>
          <Header />
          <SideMenu></SideMenu>
        </div>
        <Fragment>
          <Route path="/" exact component={Landing} />
          <Route path="/workflow" exact component={Workflow} />
        </Fragment>
      </MenuContextProvider>
    </Router>
  );
}

export default App;
