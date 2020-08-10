import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import background from '../Photos/background.png'
import { Container, Button, icon } from 'react-floating-action-button'
import add from '../Photos/add.png'


import {
    PopupboxManager,
    PopupboxContainer
} from 'react-popupbox';

//import Popup from "reactjs-popup";
//import Icon from '../Photos/background.png'
// import Fab from ' @material/fab'
// import FabButton from ' @material/fab'
// import FabButton from ' @material/fab'

class VerifyComponent extends React.Component {
    constructor (props){
        super(props);
        this.onchangedCode=this.onchangedCode.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state = {
            code: ''
        }
    
    }
   
    componentDidMount(){
    }
    onchangedCode(e)
    {
        this.setState({
            code:e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault()
        if(this.state.code === localStorage.getItem('signupcode'))
        {
            const user={
            
                gmail:localStorage.getItem('signupgmail'),
                username:localStorage.getItem('signupusername'),
                password:localStorage.getItem('signuppassword')  ,
                admin:localStorage.getItem('signupadmin') ,
                code:localStorage.getItem('signupcode'),
                verified:'y'        
            }
            axios.post('http://localhost:5200/finalregister',user)
            .then((res) =>{ console.log(res.data)
                    localStorage.removeItem('signupgmail');
                    localStorage.removeItem('signupusername');
                    localStorage.removeItem('signuppassword');
                    localStorage.removeItem('signupadmin');
                    localStorage.removeItem('signupcode');
                    alert("account verification completed. your account was created sucessfully.")
                    this.props.history.push('/login')
          })
           
        }
        else
        {
            alert('verification code ditnot match.please try again')
        }
    }
 
    render(){
        
        return(
                 <div class="container">
                                       
                                        
                                       <header class="jumbotron my-4">
                                       <p>we are almost done . we need to verify your email to complete registration. we have sent the verification code to your gmail . please enter the code to complete registration</p>
                                       <form   onSubmit={this.onSubmit}>
                                       <label for="verify"><b>Enter verification code</b></label>
                                            <input type="text" placeholder="verify" name="verify"value={this.state.code} onChange={this.onchangedCode} required />

                                            <button type="submit" value="verify">Verify</button>
                                        </form>
                                       </header>
                                           
                                            
                 </div>
            
        )
    }
}
export default VerifyComponent





