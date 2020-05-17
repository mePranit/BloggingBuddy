import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class HeaderComponent extends React.Component{
  constructor (props){
    super(props);
  }
    render(){

        return(
            <div>
                <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
              <div class="container">
                <a class="navbar-brand" href="index.html">BloggingBuddy</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                       <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                     <Link to="/recommended" className="nav-link">Recommended</Link>
                    </li>
                    <li class="nav-item">
                     <Link to="/notification" className="nav-link">Notification</Link>
                    </li>
                    <li class="nav-item">
                     <Link to="/categories" className="nav-link">Categories</Link>
                    </li>
                    <li class="nav-item">       
                     <Link to="/about" className="nav-link">About</Link>
                    </li>
                    

                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Settings
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                        <Link to="/profile" className="dropdown-item">Your Profile</Link>
                        <Link to= "/login" className="dropdown-item">Logout</Link>
                      </div>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </nav>
            </div>           
        )
    }
}