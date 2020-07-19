import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import background from '../Photos/background.png'



class AddBlogComponent extends React.Component {
 

    constructor (props){
        super(props);
        this.onchangedCategory=this.onchangedCategory.bind(this);
        this.onchangedContent=this.onchangedContent.bind(this);
        this.onchangedDate=this.onchangedDate.bind(this);
        this.onchangedUsername=this.onchangedUsername.bind(this);
        this.onchangedUserid=this.onchangedUserid.bind(this);
        this.onSubmit=this.onSubmit.bind(this);


       
        
        this.state={
            category:'',
            content:'',
            date:'',
            username:'',
            userid:''
        }
    }

    onchangedCategory(e)
    {
        this.setState({
            category:e.target.value
        });
    }

    onchangedContent(e)
    {
        this.setState({
            content:e.target.value
        });
    }

    onchangedDate(e)
    {
        this.setState({
            date:e.target.value
        });
    }

    onchangedUsername(e)
    {
        this.setState({
            username:e.target.value
        });
    }
    onchangedUserid(e)
    {
        this.setState({
            userid:e.target.value
        });
    }

    onSubmit(e)
    {
        
        e.preventDefault();
        //alert('clicked')
        const blogdata={
            category:this.state.category,
            content:this.state.content,
            date:this.state.date,
            username:this.state.username,
            userid:localStorage.getItem('userid')
        }
            console.log(blogdata);
            axios.post('http://localhost:5200/createblog',blogdata)
            .then(res => console.log(res.data));
            alert('blog created sucessfully')
            this.props.history.push('/profile')
            //alert("show for "+this.state.performer+" sucessfully added");
            //this.props.history.push('/viewshow')

            
        
    }
    componentDidMount(){
        var today = new Date();
        this.setState({
            date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
        })

        axios.get('http://localhost:5200/getuser/'+localStorage.getItem('userid')).then((res)=>{
            console.log(res.data)
            this.setState({
                username: res.data.username
            })
        })
    }




    render() {
        if(!localStorage.getItem('token') && !localStorage.getItem('userid')){
            alert("you are not logged in");
            this.props.history.push('/login');
        }
        return (
            <body style={{ backgroundImage: "url(" + background + ")" }}>
                <div class="container">

                <form style={{ padding: "20px" }} onSubmit={this.onSubmit}>
                    {/* <p><b>Post new blog</b></p> */}
                    <label for="category"><b>Category</b></label>
                    <input type="text" placeholder="Enter Category" name="category"value={this.state.category} onChange={this.onchangedCategory} required/>

                    <label for="content"><b>Content</b></label>
                    <textarea type="text" name ="content" class="form-control" rows="5" cols="100"value={this.state.content} onChange={this.onchangedContent}  required>

                    </textarea>

                    <div class="row">

                        <div class="col-lg-4 mb-4" >
                            <button class="btn btn-success" type="submit" value="submit" >Upload</button>
                        </div>
                        {/* <div class="col-lg-4 mb-4" >
                            <button  class="btn btn-danger"  value="cancel">Cancel</button>
                        </div> */}

                    </div>
                </form>

                </div>
            </body>
        )
    }
}
export default AddBlogComponent
