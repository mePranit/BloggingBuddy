import React from 'react'
import { Route } from 'react-router'


class FooterComponent extends React.Component {
    render() {
        return (
            <footer class="py-4 bg-dark" >
                <div class="container">
                    <p class="m-0 text-center text-white">Copyright &copy; BloggingBuddy 2020</p>
                    <p class="m-0 text-center text-white">-Keep writting, Keep growing</p>
                </div>

            </footer>
        )
    }
}
export default FooterComponent