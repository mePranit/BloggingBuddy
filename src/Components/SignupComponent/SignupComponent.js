import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import background from '../Photos/background.png'



class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <body style={{ backgroundImage: "url(" + background + ")" }}>


                <div class="container" style={{ paddingBottom: "0px" }}>
                    <div class="row">
                        <div class="col-lg-6" style={{ color: "white" }}>
                        
                        <h2 style={{ paddingTop: "100px" }}>Welcome to BloggingBuddy</h2>
                        
                            <ul>
                                <li>Prioritize your reading</li>
                                <li>Flourish your writting</li>
                                <li>Be the part of Genuine Blogs</li>
                                <li>Account Privacy</li>
                                <li>Secured environment to explore</li>
                            </ul>
                            <p><strong>- Keep writting , Keep growing</strong></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
                      
                            
                        </div>



                        <div class="col-lg-6">
                            <div class="container" >

                                <header class="jumbotron my-4">

                                    <div class="container">
                                        <form>
                                            <label for="username"><b>Username</b></label>
                                            <input type="text" placeholder="Enter Username" name="username" required />


                                            <label for="gmail"><b>Gmail</b></label>
                                            <input type="text" placeholder="Enter Gmail" name="gmail" required />

                                            <label for="password"><b>Password</b></label>
                                            <input type="password" placeholder="Enter Password" name="password" required />

                                            <label for="reenteredpassword"><b>Re-Enter Password</b></label>
                                            <input type="password" placeholder="Re-Enter Password" name="reenteredpassword" required />

                                            <button type="submit" value="signup">Signup</button>
                                            <Link to="/login" className="nav-link">Already have an account?</Link>
                                        </form>
                                    </div>
                                </header>

                            </div>
                        </div>
                    </div>
                </div>



            </body>
        )
    }
}
export default SignupComponent