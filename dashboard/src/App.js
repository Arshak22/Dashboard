import React from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTE_NAMES } from "./Routes";

import {Layout} from "./Pages/Layout";
import {Home} from "./Pages/Home";
import {Dashboard} from "./Pages/Dashboard";
import {Users} from "./Pages/Users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTE_NAMES.HOME} element={<Home/>}/>
          <Route path={ROUTE_NAMES.DASHBOARD} element={<Dashboard/>}/>
          <Route path={ROUTE_NAMES.USERS} element={<Users/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;