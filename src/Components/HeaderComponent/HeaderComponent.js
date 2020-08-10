import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  adminlogout(e) {
    
    e.preventDefault();
    if(localStorage.getItem('admin')=='n'){
     alert('this section is only usable for admin')
    }
     else
     {
      localStorage.clear();
     }
   
    //this.props.history.push('/login')
  }
  onadmin(e){
    if(localStorage.getItem('admin')=='n'){
      e.preventDefault();
      alert('this section is only usable for admin')
     // this.props.history.push('/dashboard')
  }
  
  }

  userlogout(e) {
    
    e.preventDefault();
    if(localStorage.getItem('admin')=='n'){
      localStorage.clear();
     
    }
    else{
      alert('this section is not usable for admin')
     }
   
    //this.props.history.push('/login')
  }
  onuser(e){
    if(localStorage.getItem('admin')=='y'){
      e.preventDefault();
      alert('this section is not usable for admin')
     // this.props.history.push('/dashboard')
  }
  
  }

  render() {
    
    return (  
      <div>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="index.html">BloggingBuddy</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
              {/* <input type="text" placeholder="Search People" style={{ marginLeft: "40px", marginRight: "40px" }} /> */}
              {/* <button>Search</button> */}
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                  </li>
                  {/* <li class="nav-item">       
                     <Link to="/addblog" className="nav-link">Create Blog</Link>
                    </li> */}

                  <li class="nav-item dropdown">
                    <a onClick={this.onuser}   class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      User Activities
                      </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                      <Link onClick={this.onuser}  to="/recommended" className="dropdown-item">Recommended</Link>
                      <Link onClick={this.onuser}  to="/about"  className="dropdown-item">About</Link>
                      {/* <Link onClick={this.onuser}  to="/notification" className="dropdown-item">Notification</Link> */}
                      <Link onClick={this.onuser}  to="/profile" className="dropdown-item">Your Profile</Link>
                      <Link onClick={this.onuser}  to="/addblog" className="dropdown-item">Create Blog</Link>
                      <Link onClick={this.onuser}  to="/find" className="dropdown-item">Find People</Link>
                      <Link onClick={this.userlogout} className="dropdown-item">Logout</Link>

                    </div>
                    
                  </li>

                  <li class="nav-item dropdown">
                    <a onClick={this.onadmin}  class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Admin Activities
                      </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
                       <Link onClick={this.onadmin}  to="/profile" className="dropdown-item">Your Profile</Link>
                       <Link onClick={this.onadmin}  to="/userlist" className="dropdown-item">View User list</Link>
                       <Link onClick={this.onadmin}  to="/bloglist" className="dropdown-item">View Blog list</Link>
                       <Link onClick={this.adminlogout} className="dropdown-item">Logout</Link>

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