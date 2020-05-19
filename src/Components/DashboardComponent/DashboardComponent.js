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
    constructor(props) {
        super(props);
    }

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

    openPopupbox() {
        const content = (
            <div class="container" style={{ backgroundColor: "#F5F8FD" }}>

                <form >
                    {/* <p><b>Post new blog</b></p> */}
                    <label for="username"><b>Category</b></label>
                    <input type="text" placeholder="Enter Category" name="username" required />

                    <label><b>Content</b></label>
                    <textarea class="form-control" rows="5" cols="100">

                    </textarea>

                    <div class="row">

                        <div class="col-lg-4 mb-4" >
                            <button class="btn btn-success" type="submit" value="signup">Upload</button>
                        </div>
                        <div class="col-lg-4 mb-4" >
                            <button class="btn btn-danger" type="submit" value="signup">Cancel</button>
                        </div>

                    </div>
                </form>

            </div>
        )

        PopupboxManager.open({
            content,
            config: {
                fadeIn: true,

                fadeInSpeed: 500,

            }
        })

    }






    render() {

        return (

            <body   >


                {/* <Popup trigger={<button> Trigger</button>} position="right center">
                    <div>Popup content here !!</div>
                </Popup> */}


                <Container>
                    <Button tooltip="Post new blog" icon="fas fa-plus" onClick={this.openPopupbox} >
                        Add
                    </Button>
                </Container>
                
                <Container >
                   <PopupboxContainer />
                </Container>


                <header class="jumbotron my-4">
                    <form >
                        <h3>Virat Kohli </h3>
                        <p><b>Sports , 5 AM</b></p>
                        <p>Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but. Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of. Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument. </p>
                    </form>
                    {/* </header> */}

                    {/* <header class="jumbotron my-4"> */}
                    <form >
                        <h3>Virat Kohli</h3>
                        <p><b>Sports , 5 AM</b></p>
                        <p>Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but. Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of. Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument. </p>
                    </form>
                    {/* </header> */}

                    {/* <header class="jumbotron my-4"> */}
                    <form >
                        <h3>Virat Kohli</h3>
                        <p><b>Sports , 5 AM</b></p>
                        <p>Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but. Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of. Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument. </p>
                    </form>
                    {/* </header> */}


                    {/* <header class="jumbotron my-4"> */}
                    <form >
                        <h3>Virat Kohli</h3>
                        <p><b>Sports , 5 AM</b></p>
                        <p>Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but. Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of. Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument. </p>
                    </form>
                    {/* </header> */}


                    {/* <header class="jumbotron my-4"> */}
                    <form >
                        <h3>Virat Kohli</h3>
                        <p><b>Sports , 5 AM</b></p>
                        <p>Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but. Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of. Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument. </p>
                    </form>
                    {/* </header> */}


                    {/* <header class="jumbotron my-4"> */}
                    <form >
                        <h3>Virat Kohli</h3>
                        <p><b>Sports , 5 AM</b></p>
                        <p>Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but. Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of. Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument. </p>
                    </form>
                    {/* </header> */}



                    {/* <header class="jumbotron my-4"> */}
                    <form >
                        <h3>Virat Kohli</h3>
                        <p><b>Sports , 5 AM</b></p>
                        <p>Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but. Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of. Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument. </p>
                    </form>
                    {/* </header> */}


                    {/* <header class="jumbotron my-4"> */}
                    <form >
                        <h3>Virat Kohli</h3>
                        <p><b>Sports , 5 AM</b></p>
                        <p>Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but. Happiness cordially one determine concluded fat. Plenty season beyond by hardly giving of. Consulted or acuteness dejection an smallness if. Outward general passage another as it. Very his are come man walk one next. Delighted prevailed supported too not remainder perpetual who furnished. Nay affronting bed projection compliment instrument. </p>
                    </form>
                </header>

            </body>
        )
    }
}
export default DashboardComponent
