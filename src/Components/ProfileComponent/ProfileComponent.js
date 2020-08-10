import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import background from '../Photos/background.png'
import profile from '../Photos/pranit.jpg'



class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onClickChangeprofile = this.onClickChangeprofile.bind(this);
        //this.update=this.update.bind(this);

        this.state = {
            mydata: [],
            myblogs: []
        }


    }
    componentDidMount() {
        // window.location.reload();
        axios.get('http://localhost:5200/getuser/' + localStorage.getItem('userid')).then((res) => {
            console.log(res.data)
            this.setState({
                mydata: res.data
            })
        })
        axios.get('http://localhost:5200/selectmyblogs/'+ localStorage.getItem('userid')).then((res) => {
            console.log(res.data)
            this.setState({
                myblogs: res.data
            })
        })
    }
    onClickChangeprofile(e) {
        e.preventDefault();
        this.props.history.push('/changeprofile')
    }
    onDeleteBlog(blogid){
        //preventDefault()
       // confirm("Are you sure you want to delete this blog ? ");
       //alert('check id'+blogid)
       let value = window.prompt('Please note that you cannot recover the deleted blog. Please type Blog id to confirm your delete . Blogid : '+ blogid)
       if(value==blogid){
        alert("blog deleted sucessfully")
        axios.delete('http://localhost:5200/deleteblogs/'+blogid).then((res)=>{
            alert("blog deleted sucessfully")
            this.props.history.push('/profile')
        })
       }
       else
       {

           alert('blogid didnot match')
       }
           //alert(showid)
    }
    onEditBlog(blogid){
        localStorage.setItem('editblogid', blogid);
        this.props.history.push('/editblog')
    }

    render() {
        if (!localStorage.getItem('token') && !localStorage.getItem('userid')) {
            alert("you are not logged in");
            this.props.history.push('/login');

        }
       
        const { data } = this.state.myblogs
        return (

            <body style={{ backgroundImage: "url(" + background + ")" }}>


                <div class="container" style={{ paddingBottom: "0px" }}>
                    <div class="row">


                        <div class="col-lg-4" >
                            <header class="jumbotron my-4" style={{ backgroundColor: "#CFCEDC" }, { padding: "20px" }} >

                                <div style={{ textAlign: "center" }} ><img src={profile} width="280" height="300" /></div>
                                <button onClick={this.onClickChangeprofile} class="btn btn-success" type="submit" value="edit">Edit</button>
                            </header>
                        </div>


                        <div class="col-lg-8" style={{ color: "white" }}>

                            <h2 style={{ paddingTop: "50px" }}><i>Name : {this.state.mydata.username}</i></h2>
                            <h2><i>Gmail : {this.state.mydata.gmail}</i></h2>
                            <h2><i>Username :{this.state.mydata.username}</i></h2>
                            <h2><i>Bio -</i></h2>
                            <p><i>{this.state.mydata.bio}</i></p>

                        </div>

                    </div>
                </div>
                <div class="container">
                    {
                        this.state.myblogs.map((data) => {
                            //console.log(data._id)
                            return <b>
                                <header class="jumbotron my-4">


                                    {/* <header class="jumbotron my-4"> */}
                                    <form >
                                        
                                        <h3>{data.username}</h3>
                                        <p><b>{data.category} ,{data.date}</b></p>
                                        <p><b>Blog id : {data._id}</b></p>
                                        <p>{data.content}</p>
                                    

                                    <div class="row">

                                        <div class="col-lg-2 mb-4" >
                                            <button onClick={() => this.onEditBlog(data._id)} class="btn btn-success" type="submit"  >Edit</button>
                                        </div>
                                      
                                        <div class="col-lg-2 mb-4" >
                                            <button onClick={() => this.onDeleteBlog(data._id)}  class="btn btn-danger" value="delete">Delete</button>
                                        </div>

                                    </div>
                                    </form>
                                </header>
                            </b>

                        })
                    }
                </div>
            </body>
        )
    }
}
export default ProfileComponent