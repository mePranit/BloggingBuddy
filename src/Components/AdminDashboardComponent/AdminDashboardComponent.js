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

class AdminDashboardComponent extends React.Component {
    constructor (props){
        super(props);

        this.state={
            mydata: [],
            allblogs:[],
            allusers:[]
        }

    
    }
    componentDidMount(){
        axios.get('http://localhost:5200/getuser/'+localStorage.getItem('userid')).then((res)=>{
            console.log(res.data)
            this.setState({
                mydata : res.data
            })
        })
        axios.get('http://localhost:5200/selectallblogs').then((res)=>{
            console.log(res.data)
            this.setState({
                allblogs : res.data
            })
        })
        axios.get('http://localhost:5200/selectallusers').then((res)=>{
            console.log(res.data)
            this.setState({
                allusers : res.data
            })
        })


    }
    render(){
        
        if(!localStorage.getItem('token') && !localStorage.getItem('userid')){
            alert("you are not logged in");
            this.props.history.push('/login');
           
        }
       // const { data } =this.state.allblogs
        return(
            <div class="container" >
            <header class="jumbotron my-4"> 
                    <div class="row">
                        <div class="col-lg-4">
                        <img class="img-fluid rounded" src={require('../Icons/user.png')} alt=""></img>
                        </div>
                        <div class="col-lg-4">
                        <h1>Admin {this.state.mydata.username}</h1>
                        <p>{this.state.mydata.gmail}</p>
                        </div>
                    </div>

                    <div class="row">
                            <div class="container p-3 my-3 bg-primary text-white">
                                <div class="row">
                                    
                                        <div class="col-lg-4">
                                                <h2>All Blogs</h2>
                                                <p>{this.state.allblogs.length}</p>
                                            </div>
                                            <div class="col-lg-4">
                                                <h2>All Users</h2>
                                                <p>{this.state.allusers.length}</p>
                                            </div>
                                            
                                </div>
                            </div>

                    </div>
                
             </header>                                               
</div>
        )
    }
}
export default AdminDashboardComponent





