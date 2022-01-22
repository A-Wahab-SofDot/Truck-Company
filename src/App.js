import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import LoginPage from "./Pages/LoginPage/LoginPage";
import AdminRegister from "./Pages/RegisterPages/AdminRegister";
import DriverRegister from "./Pages/RegisterPages/DriverRegister";
import TruckRegister from "./Pages/RegisterPages/TruckRegister";
import DriverPage from "./Pages/DriverPages/DriverPage";
import AdminPage from "./Pages/AdminPages/AdminPage";
import TrcukPage from "./Pages/TruckPages/TruckPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register/admin" component={AdminRegister}></Route>
        <Route path="/register/driver" component={DriverRegister}></Route>
        <Route path="/register/truck" component={TruckRegister}></Route>
        <Route path="/driver" component={DriverPage}></Route>
        <Route path="/admin" component={AdminPage}></Route>
        <Route path="/truck" component={TrcukPage}></Route>
      </Switch>
    </>
  );
}

export default App;
