
//import logo from '../Photos/bloggingbuddyLogo_Small.PNG'
//style={{backgroundImage: "url(" + background + ")"}}

import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import css from '../LoginComponent/LoginCss.css';
import background from '../Photos/background.png'


class LoginComponent extends React.Component {



    render() {
        return (
            
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img class="img-fluid rounded" src={require('../Photos/blogggingbuddyLogo.jpg')} alt="" />
                    </div>
                    <div class="col-lg-6">

                        <div class="container" >

                            <header class="jumbotron my-4" >

                                <div class="container" >
                                    <form >
                                        <label for="uname"><b>Username</b></label>
                                        <input type="text" placeholder="Enter Username" name="uname" required />

                                        <label for="psw"><b>Password</b></label>
                                        <input type="password" placeholder="Enter Password" name="psw" required />

                                        <button type="submit">Login</button>
                                        <label>
                                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                                         </label>
                                    </form>
                                </div>
                                <Link to="/signup">Do not have an account?</Link>
                            </header>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default LoginComponent

