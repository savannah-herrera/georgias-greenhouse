import React from "react"
import MainNav from "../components/mainNav.js"
// import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css'
import logo from "../images/greenhouse-logo.png"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


export default function MainTemplate({ children }) {
    return (
        <>
            <header className="container">

                <div className="row">
                    <div className="col-1"></div>
                    <img src={logo} alt="greenhouse-logo" className="col-10" id="logo"></img>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <MainNav></MainNav>
                    </div>
                    <div className="col-1"></div>
                </div>
            </header>
            <hr></hr>
            <div className="container">
                {children}
            </div>
            <hr></hr>
            <footer>
                <div className="container footer">
                    <div className="row">
                        <div className="col-sm-2 col-md-2">
                            <ul>
                                <li> <img src={FacebookIcon} alt="facebook-icon"></img></li>
                                <li> <img src={InstagramIcon} alt="instagram-icon"></img></li>
                                <li> <img src={TwitterIcon} alt="twitter-icon"></img></li>
                            </ul>
                        </div>

                        <div className="col-sm-12 col-md-8">
                            <MainNav></MainNav>
                        </div>
                        <div className="col-sm-12 col-md-2">
                            <small>&copy; 2021</small>
                        </div>

                    </div>
                </div>
            </footer>


        </>

    )
}