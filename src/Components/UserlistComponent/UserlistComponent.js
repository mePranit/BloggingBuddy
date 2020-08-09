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

class UserlistComponent extends React.Component {
    constructor (props){
        super(props);
      //  this.onCancelBook=this.onCancelBook.bind(this)

        this.state = {
            allusers : []
        }
    
    }
   
    componentDidMount(){
        axios.get('http://localhost:5200/selectallusers').then((res)=>{
            console.log(res.data)
            this.setState({
                allusers : res.data
            })
        })
    }
    onDeleteUser(deleteid){
       
       // confirm("Are you sure you want to delete this blog ? ");
       //alert('check id'+blogid)
       let value = window.prompt('Please note that you cannot recover the deleted user. Please type user id to confirm your delete . userid : '+ deleteid)
       if(value==deleteid){
        alert("user deleted sucessfully")
        axios.delete('http://localhost:5200/deleteuser/'+deleteid).then((res)=>{
            alert("user deleted sucessfully")
            this.props.history.push('/userlist')
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
    //    if(localStorage.getItem('admin')=='y'){
    //         this.props.history.push('/admindashboard')
    //     }
        const { data } =this.state.allusers
        return(
                 <div class="container">
                                    {
                                    this.state.allusers.map((data) => {
                                        //console.log(data._id)
                                        return <b>
                                             <header class="jumbotron my-4">
                  

                                                            {/* <header class="jumbotron my-4"> */}
                                                            <form >
                                                                <h3>Username : {data.username}</h3>
                                                                <p><b>Name : {data.username}</b></p>
                                                                <p><b>Gmail : {data.gmail}</b></p>
                                                                <p>User id : {data._id}</p>
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
export default UserlistComponent





