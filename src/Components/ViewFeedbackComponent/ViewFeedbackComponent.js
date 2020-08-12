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

class viewFeedbackComponent extends React.Component {
    constructor (props){
        super(props);
        this.onDeleteUser=this.onDeleteUser.bind(this)
        this.state = {
            allfeedback : []
        }
    
    }
   
    componentDidMount(){
        axios.get('http://localhost:5200/selectallfeedback').then((res)=>{
            console.log(res.data)
            this.setState({
                allfeedback : res.data
            })
        })
    }
    onDeleteUser(deleteid){
       
       // confirm("Are you sure you want to delete this blog ? ");
       //alert('check id'+blogid)
       let value = window.prompt('Please note that you cannot recover the deleted user. Please type user id to confirm your delete . userid : '+ deleteid)
       if(value==deleteid){
        axios.delete('http://localhost:5200/r/'+deleteid).then((res)=>{
            alert("user deleted sucessfully")
            this.props.history.push('/dashboard')
        })
       }
       else
       {

           alert('userid didnot match')
       }
           //alert(showid)
    }
    render(){
        
        if(!localStorage.getItem('token') && !localStorage.getItem('userid')){
            alert("you are not logged in");
            this.props.history.push('/login');
           
        }
        const { data } =this.state.allfeedback
        return(
                 <div class="container">
                                    {
                                    this.state.allfeedback.map((data) => {
                                        //console.log(data._id)
                                        return <b>
                                             <header class="jumbotron my-4">
                  

                                                            {/* <header class="jumbotron my-4"> */}
                                                            <form >
                                                                <p>Feedback id : {data._id}</p>
                                                                <p><b>Feedback : {data.feedback}</b></p>
                                                                <p><b>Feedback given by  : {data.userid}</b></p>
                                                                <div class="row">
                                                            
                                                                <div class="col-lg-2 mb-4" >
                                                                    <button onClick={() => this.onDeleteUser(data._id)}  class="btn btn-danger" value="delete">Delete</button>
                                                                </div>

                                                                </div>
                                                            </form>
                                            </header>
                                             </b>
                                        
                                    })
                                }
                 </div>
            
        )
    }
}
export default viewFeedbackComponent





