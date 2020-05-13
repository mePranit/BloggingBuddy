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
                     <Link to="/about" className="nav-link">About</Link>
                    </li>



                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Notifications
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                        <Link to="/viewshow" className="dropdown-item">All Show lists</Link>
                        <Link to="/myshow" className="dropdown-item">My Show lists</Link>
                        <Link to="/bookedshow" className="dropdown-item">Booked Show lists</Link>
                      </div>
                    </li>




                    
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Recommended
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPortfolio">
                        <Link to="/addshow" className="dropdown-item">Add Show</Link>
                        <Link to="/viewshow" className="dropdown-item">Book Show</Link>
                      </div>
                    </li>

                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Settings
                      </a>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                        <Link to="/personalinformation" className="dropdown-item">Your Profile</Link>
                        <Link className="dropdown-item">Logout</Link>
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