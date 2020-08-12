import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import background from '../Photos/background.png'



class FeedbackComponent extends React.Component {
    constructor (props){
        super(props);
        this.onchangedFeedback=this.onchangedFeedback.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
   
        
        this.state={
            feedback:'',
            userid:''
        }
    }

    onchangedFeedback(e)
    {
        this.setState({
            feedback:e.target.value
        });
    }



    onSubmit(e)
    {
        
        e.preventDefault();
        // //alert('clicked')
        const feedbackdata={
            feedback:this.state.feedback,
            userid:localStorage.getItem('userid')
        }
            console.log(feedbackdata);
            axios.post('http://localhost:5200/addfeedback',feedbackdata)
            .then(res => console.log(res.data));
            alert('feedback added sucessfully')
            this.props.history.push('/dashboard')
        
    }

    render() {
        if(!localStorage.getItem('token') && !localStorage.getItem('userid')){
            alert("you are not logged in");
            this.props.history.push('/login');
        }
        return (
            <div class="container">
                <form style={{ padding: "20px" }} onSubmit={this.onSubmit}>
                    {/* <p><b>Post new blog</b></p> */}
                    <label for="feedback"><b>Feedback</b></label>
                    <textarea type="text" name ="feedback" class="form-control" rows="5" cols="100"value={this.state.feedback} onChange={this.onchangedFeedback}  required>

                    </textarea>

                    <div class="row">

                        <div class="col-lg-4 mb-4" >
                            <button class="btn btn-success" type="submit" value="submit" >Submit Feedback</button>
                        </div>
                        {/* <div class="col-lg-4 mb-4" >
                            <button  class="btn btn-danger"  value="cancel">Cancel</button>
                        </div> */}

                    </div>
                </form>               
            </div>
        )
    }
}
export default FeedbackComponent
