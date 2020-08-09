import React from 'react';
import logo from './logo.svg';
import './App.css';

//  import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//  import '../node_modules/bootstrap/dist/css/modern-business.css';
//  import '../node_modules/bootstrap/dist/css/heroic-features.css';
 import '../node_modules/jquery/dist/jquery.min.js';
 import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
 

import './Style/bootstrap.min.css';
import './Style/modern-business.css';
import './Style/heroic-features.css';

import LoginComponent from './Components/LoginComponent/LoginComponent';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import SignupComponent from './Components/SignupComponent/SignupComponent';
import ProfileComponent from './Components/ProfileComponent/ProfileComponent';
import AboutComponent from './Components/AboutComponent/AboutComponent';
import DashboardComponent from './Components/DashboardComponent/DashboardComponent';
import RecommendedComponent from './Components/RecommendedComponent/RecommendedComponent';
import NotificationComponent from './Components/NotificationComponent/NotificationComponent';
import AddBlogComponent from './Components/AddBlogComponent/AddBlogComponent';
import ChangeProfileComponent from './Components/ChangeProfileComponent/ChangeProfileComponent';
import EditBlogComponent from './Components/EditBlogComponent/EditBlogComponent';
import AdminDashboardComponent from './Components/AdminDashboardComponent/AdminDashboardComponent';
import UserlistComponent from './Components/UserlistComponent/UserlistComponent';
import BloglistComponent from './Components/BloglistComponent/BloglistComponent';





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
      {/* <Route path="/dashboard"exact component={HeaderComponent}/> 
      <Route path="/admindashboard"exact component={AdminHeaderComponent}/>  */}
      <HeaderComponent/>
     
            <br/>                
              <Route path="/"exact component={LoginComponent}/>
              <Route path="/login" component={LoginComponent}/>
              <Route path="/signup" component={SignupComponent}/>
              <Route path="/profile" component={ProfileComponent}/> 
              <Route path="/about" component={AboutComponent}/>    
              <Route path="/dashboard" component={DashboardComponent}/> 
              <Route path="/admindashboard" component={AdminDashboardComponent}/> 
              <Route path="/recommended" component={RecommendedComponent}/>    
              <Route path="/notification" component={NotificationComponent}/>     
              <Route path="/addblog" component={AddBlogComponent}/> 
              <Route path="/changeprofile" component={ChangeProfileComponent}/> 
              <Route path="/editblog" component={EditBlogComponent}/>      
              <Route path="/userlist" component={UserlistComponent}/>      
              <Route path="/bloglist" component={BloglistComponent}/>                 
            <br/>
          <FooterComponent/>
      </Router>
    </BrowserRouter>
  );
}
export default App;