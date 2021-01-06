import React from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SideBar from "./components/SideBar"
import Home from "./components/Home"
import AddPub  from "./components/AddPub"
import EditPub  from "./components/EditPub"



function App() {
  return (
    <div className="app">
      <Router>
        <SideBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddPub} />
          <Route path="/edit/:id" component={EditPub} />
        </Switch>

      </Router>

    </div>
  );
}

export default App;
