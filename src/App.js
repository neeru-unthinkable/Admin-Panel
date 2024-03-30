import React from 'react';
import './App.css';
import LoginPage from './Pages/Login';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App(){

    return (
      <Router>
        <Route path="/login" component={LoginPage} />
      </Router>
  );
}

export default App;