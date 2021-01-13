import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SideBar from "./components/SideBar"
import Home from "./components/Home"
import AddPub  from "./components/AddPub"
import EditPub  from "./components/EditPub"
import AddUser  from "./components/AddUser"
import UserList from "./components/UserList"



function App() {
  return (
    <div className="app">
      <Router>
        <SideBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/addpub" component={AddPub} />
          <Route path="/editpub/:id" component={EditPub} />
          <Route path="/adduser" component={AddUser} />
          <Route path="/userlist" component={UserList} />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
