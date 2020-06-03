import React, { useState, Component } from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import MainEditor from "./MainEditor";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import LandingPage from "./components/landingpage/LandingPage";


const ProtectedRoute = ({ component: Component,authenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
      authenticated === true ? 
        <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />   
  )} />
);

const App = () => {
  const [user, setUser] = useState({})
  const [authenticated, setAuthenticated] = useState(false)
  const value = {user, setUser, authenticated, setAuthenticated}
  return (
      <Router>
        <Switch>           
          <Route path="/login" render={(props) => <Login {...props} user={value}/>}/> 
          <Route  path="/register" render={(props) => <Register {...props} user={value}/>}/>
          <ProtectedRoute path="/editor"  component={(props) => <MainEditor {...props} user={value}/>} authenticated={authenticated}/>
          <Route  path="/" component={LandingPage}/>
        </Switch>
      </Router>
  );
};

export default App;
