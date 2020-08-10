import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import background from '../Photos/background.png'



class FindComponent extends React.Component {
    constructor (props){
        super(props);
        this.onchangedSearchvalue=this.onchangedSearchvalue.bind(this)
        this.onSearch=this.onSearch.bind(this)

        this.state = {
            searchvalue:'',
            allusers : []
        }
    
    }
    onSearch(e){
        e.preventDefault()
        axios.get('http://localhost:5200/searchuser/'+this.state.searchvalue).then((res)=>{
            console.log(res.data)
            this.setState({
                allusers : res.data
            })
            console.log(res.data)
        })
        //alert(this.state.searchvalue)
    }

    onchangedSearchvalue(e)
    {
        this.setState({
            searchvalue:e.target.value
        });
    }

    render() {
        if(!localStorage.getItem('token') && !localStorage.getItem('userid')){
            alert("you are not logged in");
            this.props.history.push('/login');
        }
        return (
            <div class="container">
                <form onSubmit={this.onSearch}>
                    <div class="row">
                        <div class="col-lg-4 mb-4" >
                        <input type="text" placeholder="Search People"value={this.state.searchvalue} onChange={this.onchangedSearchvalue}  /> 
                        </div>
                        <div class="col-lg-2 mb-4" >
                        <button   class="btn btn-danger" value="search">Search</button>
                                                                
                        </div>
                    </div>   
                </form> 
                    <header class="jumbotron my-4">
                    </header>                    
            </div>
        )
    }
}
export default FindComponent
