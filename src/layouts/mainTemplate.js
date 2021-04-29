import React from "react"
import MainNav from "../components/mainNav.js"
// import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css'
import logo from "../images/greenhouse-logo.png"
import { CartContextProvider } from "../../shopping.js"
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';


export default function MainTemplate({ children }) {
    return (
        <CartContextProvider>
            <div className="outline">
                <header className="container">

                    <div className="row">
                        <div className="col-1"></div>
                        <img src={logo} alt="greenhouse-logo" className="col-10" id="logo"></img>
                        <div className="col-1 col-xs-0"></div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-12">
                            <MainNav></MainNav>
                        </div>
                        <div className="col-1 col-xs-0"></div>
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
                            <div className="col-12">
                                <MainNav></MainNav>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <small className="small">&copy; 2021</small>
                            </div>
                        </div>
                        <div className="row"><div className="disclaimer">Product images from thesill.com; all other images from Lexi Adams; site for educational purposes only</div></div>
                    </div>

                </footer>

            </div>
        </CartContextProvider>

    )
}