import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import background from '../Photos/background.png'



class SignupComponent extends React.Component {
    constructor (props){
        super(props);
        this.onchangedUsername=this.onchangedUsername.bind(this);
        this.onchangedGmail=this.onchangedGmail.bind(this);
        this.onchangedPassword=this.onchangedPassword.bind(this);
        this.onchangedReenteredpassword=this.onchangedReenteredpassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        
        this.state={
            username: '',
            gmail: '',
            password: '',
            reenteredpassword: '',
            admin:''
        }
    }
    onchangedUsername(e)
    {
        this.setState({
            username:e.target.value
        });
    }

    onchangedGmail(e)
    {
        this.setState({
            gmail:e.target.value
        });
    }

    onchangedPassword(e)
    {
        this.setState({
            password:e.target.value
        });
    }

    onchangedReenteredpassword(e)
    {
        this.setState({
            reenteredpassword:e.target.value
        });
    }
    onSubmit(e)
    {
        //alert(this.state.gmail);
        e.preventDefault();
        if(this.state.password===this.state.reenteredpassword)
        {
            const user={
            
                gmail:this.state.gmail,
                username:this.state.username,
                password:this.state.password  ,
                admin:'n'         
            }
                console.log(user);
                axios.post('http://localhost:5200/registeruser',user)
                .then(res => console.log(res.data));
                alert("user created sucessfully");
                this.props.history.push('/login')
        }
        else
        {
            alert("Password didnot matched");
           
        }
       
            
        
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
                                        <form   onSubmit={this.onSubmit}>
                                            <label for="username"><b>Username</b></label>
                                            <input type="text" placeholder="Enter Username" name="username"value={this.state.username} onChange={this.onchangedUsername} required />


                                            <label for="gmail"><b>Gmail</b></label>
                                            <input type="text" placeholder="Enter Gmail" name="gmail" value={this.state.gmail} onChange={this.onchangedGmail}  required />

                                            <label for="password"><b>Password</b></label>
                                            <input type="password" placeholder="Enter Password" name="password"value={this.state.password} onChange={this.onchangedPassword} required />

                                            <label for="reenteredpassword"><b>Re-Enter Password</b></label>
                                            <input type="password" placeholder="Re-Enter Password" name="reenteredpassword"value={this.state.reenteredpassword} onChange={this.onchangedReenteredpassword} required />

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