import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import background from '../Photos/background.png'
import profile from '../Photos/pranit.jpg'




class ChangeProfileComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onchangedUsername = this.onchangedUsername.bind(this);
        this.onchangedGmail = this.onchangedGmail.bind(this);
        this.onchangedBio = this.onchangedBio.bind(this);
        this.onchangedPassword = this.onchangedPassword.bind(this);
        this.onchangedReenteredpassword = this.onchangedReenteredpassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       // this.refreshPage = this.refreshPage.bind(this);
        


        this.state = {
            username: '',
            gmail: '',
            bio: '',
            password: '',
            reenteredpassword: '',
            mydata: []
        }
    }
    onchangedUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onchangedGmail(e) {
        this.setState({
            gmail: e.target.value
        });
    }
    onchangedBio(e) {
        this.setState({
            bio: e.target.value
        });
    }

    onchangedPassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onchangedReenteredpassword(e) {
        this.setState({
            reenteredpassword: e.target.value
        });
    }

    onSubmit(e) {
        //alert(this.state.gmail);
        e.preventDefault();
        if (this.state.password === this.state.reenteredpassword) {
            const user = {
                bio: this.state.bio,
                gmail: this.state.gmail,
                username: this.state.username,
                password: this.state.password
            }
            console.log(user);
            axios.put('http://localhost:5200/updateuser/' + localStorage.getItem('userid'), user)
                .then(res => console.log(res.data));
            alert("user updated sucessfully");
            //window.location.reload(false);
            this.props.history.push('/profile')
        }
        else {
            alert("Password didnot matched");

        }

    }
    //  refreshPage(e){ 
    //     window.location.reload(); 
    // }
    componentDidMount() {
        //this.refreshPage()
        // window.location.reload();
        axios.get('http://localhost:5200/getuser/' + localStorage.getItem('userid')).then((res) => {
            console.log(res.data)
            this.setState({
                mydata: res.data
            })
            localStorage.setItem('profileusername', this.state.mydata.username);
            localStorage.setItem('profilegmail', this.state.mydata.gmail);
            localStorage.setItem('profilepassword', this.state.mydata.password);
            localStorage.setItem('profilebio', this.state.mydata.bio);
        })
    }
    // cleardata() {
    //     localStorage.removeItem('profileusername')
    //     localStorage.removeItem('profilegmail')
    //     localStorage.removeItem('profilepassword')
    //     localStorage.removeItem('profilebio')
    // }


    render() {

        if (!localStorage.getItem('token') && !localStorage.getItem('userid')) {
            alert("you are not logged in");
            this.props.history.push('/login');

        }
       
        return (
            
            <body style={{ backgroundImage: "url(" + background + ")" }}>


                <div class="container" style={{ paddingBottom: "0px" }}>
                    {/* <div class="col-lg-6" style={{ color: "white" }}> */}
                    {/* <header class="jumbotron my-4" style={{ backgroundColor: "#CFCEDC" }, { padding: "20px" }} > */}
                    <div class="container" >

                        <header class="jumbotron my-4">
                            <div style={{ textAlign: "center" }} ><img src={profile} width="270" height="300" /></div>

                            <div class="row">

                                <div class="col-lg-4 mb-4" >

                                </div>
                                <div class="col-lg-4 mb-4" >
                                    <button onClick={this.onClickChangeprofile} class="btn btn-success" type="submit" value="edit">Upload</button>
                                </div>

                                {/* <div class="col-lg-4 mb-4" >
    <button  class="btn btn-danger"  value="cancel">Cancel</button>
</div> */}

                            </div>
                            {/* </header> */}

                            {/* <h2 style={{ paddingTop: "100px" }}>Welcome to BloggingBuddy</h2>
                        
                            <ul>
                                <li>Prioritize your reading</li>
                                <li>Flourish your writting</li>
                                <li>Be the part of Genuine Blogs</li>
                                <li>Account Privacy</li>
                                <li>Secured environment to explore</li>
                            </ul>
                            <p><strong>- Keep writting , Keep growing</strong></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
                      
                             */}
                            {/* </div> */}



                            {/* <div class="col-lg-6"> */}



                            <form onSubmit={this.onSubmit}>
                                <label for="bio"><b>Your Bio</b></label>
                                <textarea type="text" name="bio" class="form-control" rows="5" cols="100" defaultValue={localStorage.getItem('profilebio')} onChange={this.onchangedBio}>

                                </textarea>
                                <label for="username"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" defaultValue={localStorage.getItem('profileusername')} onChange={this.onchangedUsername} required />


                                <label for="gmail"><b>Gmail</b></label>
                                <input type="text" placeholder="Enter Gmail" defaultValue={localStorage.getItem('profilegmail')} onChange={this.onchangedGmail} required />

                                <label for="password"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" defaultValue={localStorage.getItem('profilepassword')} onChange={this.onchangedPassword} required />

                                <label for="reenteredpassword"><b>Re-Enter Password</b></label>
                                <input type="password" placeholder="Re-Enter Password" defaultValue={localStorage.getItem('profilepassword')} onChange={this.onchangedReenteredpassword} required />

                                <button type="submit" >Save</button>
                                {/* <Link to="/login" className="nav-link">Already have an account?</Link> */}
                            </form>
                        </header>

                    </div>
                    {/* </div> */}
                </div>



            </body>
        )
    }
}
export default ChangeProfileComponent