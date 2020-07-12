import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import background from '../Photos/background.png'



class CategoriesComponent extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        if(!localStorage.getItem('token') && !localStorage.getItem('userid')){
            alert("you are not logged in");
            this.props.history.push('/login');
        }
        return (
            <body  style={{backgroundColor:"#EEF5F5"}}>
                <div class="container" style={{backgroundColor:"#DEE3E3"}} >
                    <p style={{textAlign:"center"}}>Virat started following you</p>
                </div>
                <div class="container" style={{backgroundColor:"#DEE3E3"}} >
                    <p style={{textAlign:"center"}}>Virat started following you</p>
                </div>
                <div class="container" style={{backgroundColor:"#DEE3E3"}} >
                    <p style={{textAlign:"center"}}>Virat started following you</p>
                </div>
                <div class="container" style={{backgroundColor:"#DEE3E3"}} >
                    <p style={{textAlign:"center"}}>Virat started following you</p>
                </div>
                <div class="container" style={{backgroundColor:"#DEE3E3"}} >
                    <p style={{textAlign:"center"}}>Virat started following you</p>
                </div>
                <div class="container" style={{backgroundColor:"#DEE3E3"}} >
                    <p style={{textAlign:"center"}}>Virat started following you</p>
                </div>
            </body>
        )
    }
}
export default CategoriesComponent
