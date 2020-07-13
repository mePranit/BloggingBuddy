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

class DashboardComponent extends React.Component {
    constructor (props){
        super(props);
      //  this.onCancelBook=this.onCancelBook.bind(this)

        this.state = {
            allblogs : []
        }
    
    }
    // constructor (props){
    //     super(props);
    //     this.onchangedCategory=this.onchangedCategory.bind(this);
    //     this.onchangedContent=this.onchangedContent.bind(this);
    //     this.onchangedDate=this.onchangedDate.bind(this);
    //     this.onchangedUsername=this.onchangedUsername.bind(this);
    //     this.onchangedUserid=this.onchangedUserid.bind(this);


        
    //     this.state={
    //         category:'',
    //         content:'',
    //         date:'',
    //         username:'',
    //         userid:''
    //     }
    // }

    // onchangedCategory(e)
    // {
    //     this.setState({
    //         category:e.target.value
    //     });
    // }

    // onchangedContent(e)
    // {
    //     this.setState({
    //         content:e.target.value
    //     });
    // }

    // onchangedDate(e)
    // {
    //     this.setState({
    //         date:e.target.value
    //     });
    // }

    // onchangedUsername(e)
    // {
    //     this.setState({
    //         username:e.target.value
    //     });
    // }
    // onchangedUserid(e)
    // {
    //     this.setState({
    //         userid:e.target.value
    //     });
    // }

    // onSubmit(e,category,content)
    // {
        
    //     e.preventDefault();
    //     const blogdata={
    //         category:this.state.location,
    //         content:this.state.content,
    //         date:this.state.date,
    //         username:this.state.username,
    //         userid:localStorage.getItem('userid')
    //     }
    //         console.log(blogdata);
    //         axios.post('http://localhost:5200/createblog',blogdata)
    //         .then(res => console.log(res.data));
    //         alert('blog created sucessfully')
    //         //alert("show for "+this.state.performer+" sucessfully added");
    //         //this.props.history.push('/viewshow')
    // }

    // updatePopupbox() {
    //     const content = (
    //       <div>
    //         <span>Update popupbox with new content and config</span>
    //         <button onClick={PopupboxManager.close}>Close</button>
    //       </div>
    //     )

    //     PopupboxManager.update({
    //       content,
    //       config: {
    //         titleBar: {
    //           text: 'Updated!'
    //         }
    //       }
    //     })
    //   }

    // openPopupbox() {
    //     const content = (
    //         this.props.history.push('/addblog')
    //     )

    //     PopupboxManager.open({
    //         content,
    //         config: {
    //             fadeIn: true,

    //             fadeInSpeed: 500,

    //         }
    //     })

    // }

    componentDidMount(){
        axios.get('http://localhost:5200/selectallblogs').then((res)=>{
            console.log(res.data)
            this.setState({
                allblogs : res.data
            })
        })
    }
    render(){
        
        if(!localStorage.getItem('token') && !localStorage.getItem('userid')){
            alert("you are not logged in");
            this.props.history.push('/login');
           
        }
        const { data } =this.state.allblogs
        return(
                 <div class="container">
                                    {
                                    this.state.allblogs.map((data) => {
                                        //console.log(data._id)
                                        return <b>
                                             <header class="jumbotron my-4">
                  

                                                            {/* <header class="jumbotron my-4"> */}
                                                            <form >
                                                                <h3>{data.username}</h3>
                                                                <p><b>{data.category} ,{data.date}</b></p>
                                                                <p>{data.content}</p>
                                                            </form>
                                            </header>
                                             </b>
                                        
                                    })
                                }
                 </div>
            
        )
    }
}
export default DashboardComponent





