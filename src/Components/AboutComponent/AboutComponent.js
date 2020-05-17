import React from 'react'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import background from '../Photos/background.png'

import pranit from '../Photos/pranit.jpg'
import meghna from '../Photos/meghna.jpg'
import hada from '../Photos/hada.jpg'
import apeksha from '../Photos/apeksha.jpg'
import uma from '../Photos/uma.jpeg'
import sauhard from '../Photos/sauhard.jpg'



class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <body >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=27.725818, 85.330768&amp;spn=27.725818, 85.330768&amp;t=m&amp;z=6&amp;output=embed"></iframe>
                        </div>

                        <div class="col-lg-6" style={{ color: "white" }}>
                            <h2>About Blogging Buddy</h2>
                            <p>BloggingBuddy is a blogging platform where people can interact with different blogs daily. They are allowed to post 
                                as well. Blogging Buddy provides category selection functionality to ensure every user can read the blog as per their choice.
                                
                            </p>
                            <p>
                                Blogging Buddy is focused to ensure user's data security and care about the interaction privacy with high concern.
                                
                            </p>
                            <p>
                                
                            </p>
                           </div>
                    </div>
                </div>




                <div class="container">
                    <h2 style={{ color: "white" }}>Our Team</h2>
                    <div class="row">

                        <div class="col-lg-4 mb-4"  >
                            <div class="card h-100 text-center">

                                <div class="card-body">
                                    <img style={{ height: "200px" }} class="card-img-top" src={pranit} alt="" />
                                    <h2>.</h2>
                                    <h4 class="card-title">Pranit Poudel</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Backend Developer</h6>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <div class="card-body">
                                    <img style={{ height: "200px" }} class="card-img-top" src={apeksha} alt="" />
                                    <h2>.</h2>
                                    <h4 class="card-title">Apekshya Thapa</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Frontend Developer</h6>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <div class="card-body">
                                    <img style={{ height: "200px" }} class="card-img-top" src={meghna} alt="" />
                                    <h2>.</h2>
                                    <h4 class="card-title">Meghna Shrestha</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Frontend Developer</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div class="container">
                    <div class="row">

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <div class="card-body">
                                    <img style={{ height: "200px" }} class="card-img-top" src={sauhard} alt="" />
                                    <h2>.</h2>
                                    <h4 class="card-title">Sauhard Bhandari</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Tester</h6>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <div class="card-body">
                                    <img style={{ height: "200px" }} class="card-img-top" src={hada} alt="" />
                                    <h2>.</h2>
                                    <h4 class="card-title">Bishal Hada</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Scrum Master / Product Owner</h6>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <div class="card h-100 text-center">
                                <div class="card-body">
                                    <img style={{ height: "200px" }} class="card-img-top" src={uma} alt="" />
                                    <h2>.</h2>
                                    <h4 class="card-title">Uma Manandar</h4>
                                    <h6 class="card-subtitle mb-2 text-muted">Tester</h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </body>
        )

    }
}
export default AboutComponent