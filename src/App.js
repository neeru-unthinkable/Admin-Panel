import React from 'react';
import './App.css';
import LoginPage from './Pages/Login';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import SignupPage from './Pages/Signup';
import NetworkDetector from './hoc/NetworkDetector';
import Error404 from './Components/error';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
// import { Dashboard } from '@material-ui/icons';

function App(){

    return (
      <Router>
        <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <ProtectedRoute exact path = "/dashboard" component = {Dashboard}/>
        <Route path="/" component={Error404} />
        </Switch>
      </Router>
  );
}

export default NetworkDetector(App);