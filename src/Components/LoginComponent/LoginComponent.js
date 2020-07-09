
//import logo from '../Photos/bloggingbuddyLogo_Small.PNG'
//style={{backgroundImage: "url(" + background + ")"}}

import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import css from '../LoginComponent/LoginCss.css';
import background from '../Photos/background.png'


class LoginComponent extends React.Component {
    constructor (props){
        super(props);
        this.onchangedUsername=this.onchangedUsername.bind(this);
        this.onchangedPassword=this.onchangedPassword.bind(this);
        this.onLogin=this.onLogin.bind(this);


        
        this.state={
            username: '',
            password: ''
            
        }
    }

        onchangedUsername(e)
        {
            this.setState({
                username:e.target.value
            });
        }
        onchangedPassword(e)
        {
            this.setState({
                password:e.target.value
            });
        }
        onLogin(e)
            {
                alert('login clicked');
                e.preventDefault();

                const user={
                    username:this.state.username,
                    password:this.state.password           
                }
                axios.post('http://localhost:5200/login',user).then((res)=>{
                     //console.log(res.data)
                     if(res.data.message == 'Invalid')
                     {
                         alert("Incorrect Creditials");
                         console.log(res.data)
                     }
                     else
                     {
                        
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('userid', res.data._id);
                        //localStorage.getItem('itemName')
                        //localStorage.clear();
                        console.log(localStorage.getItem('token'));
                        console.log(localStorage.getItem('userid'));

                        this.props.history.push('/dashboard')
                     }
                     
                    //this.setState({
                     //   mydata : res.data
                    //})
                    //console.log(mydata);
                
                })
                /*
                    console.log(user);
                    axios.post('http://localhost:5000/login',user)
                    .then(res => console.log(res.data)); 

                     */
            
                    
            }
    render() {
        return (
            
            <div class="container">
                <div class="row">
                    <div class="col-lg-6" style={{ paddingTop: "25px" }}>
                        <img class="img-fluid rounded" src={require('../Photos/blogggingbuddyLogo_circular.png')} alt="" />
                    </div>
                    <div class="col-lg-6">

                        <div class="container" >

                            <header class="jumbotron my-4" >

                                <div class="container" >
                                    <form onSubmit={this.onLogin} >
                                        <label for="uname"><b>Username</b></label>
                                        <input type="text" placeholder="Enter Username" name="uname"value={this.state.username} onChange={this.onchangedUsername} required />

                                        <label for="psw"><b>Password</b></label>
                                        <input type="password" placeholder="Enter Password" name="psw"value={this.state.password} onChange={this.onchangedPassword} required />

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

