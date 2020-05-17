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
    }



    render() {

        return (
            <body style={{ backgroundImage: "url(" + background + ")" }}>


                <div class="container" style={{ paddingBottom: "0px" }}>
                    <div class="row">
                        

                        <div class="col-lg-4" >
                        <header class="jumbotron my-4"style={{ backgroundColor: "#CFCEDC" },{padding:"20px"}} >
                            
                            <div style={{textAlign:"center"}} ><img  src={profile}    width="280" height="300"/></div>
                            <button class="btn btn-success" type="submit" value="signup">Upload</button>
                        </header>
                        </div>


                        <div class="col-lg-8" style={{ color: "white" }}>
                        
                        <h2 style={{ paddingTop: "50px" }}><i>Name : Pranit Poudel</i></h2>
                        <h2><i>Gmail : pranitpoudel@gmail.com</i></h2>
                        <h2><i>Username : pranitpoudel07</i></h2>
                        <h2><i>Bio -</i></h2>
                        <p><i>Of resolve to gravity thought my prepare chamber so. Unsatiable entreaties collecting may sympathize nay interested instrument. If continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first shall for. My smiling to he removal weather on anxious. </i></p>
                     
                     </div>
                        
                    </div>
                </div>



            </body>
        )
    }
}
export default ProfileComponent