import React from 'react';
import logo from './logo.svg';
import './App.css';

//  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//  import '../node_modules/bootstrap/dist/css/modern-business.css';
//  import '../node_modules/bootstrap/dist/css/heroic-features.css';
//  import '../node_modules/jquery/dist/jquery.min.js';
 import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
 

import './Style/bootstrap.min.css';
import './Style/modern-business.css';
import './Style/heroic-features.css';

import LoginComponent from './Components/LoginComponent/LoginComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import SignupComponent from './Components/SignupComponent/SignupComponent';


import {BrowserRouter} from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    
      <Router>
          <HeaderComponent/>
            <br/>         
              <Route path="/"exact component={LoginComponent}/>
              <Route path="/login" component={LoginComponent}/>
              <Route path="/signup" component={SignupComponent}/>        
            <br/>
          <FooterComponent/>
      </Router>
    </BrowserRouter>
  );
}
export default App;