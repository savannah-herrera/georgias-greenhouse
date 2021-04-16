import React from "react"
import MainNav from "../components/mainNav.js"
import 'bootstrap/dist/css/bootstrap.css'
import logo from "../images/greenhouse-logo.png"

export default function MainTemplate({ children }) {
    return (
        <>
            <header className="container">

                <div className="row">
                    <div className="col-1"></div>
                    <img src={logo} alt="greenhouse-logo" className="col-10 logo"></img>
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
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            [social icons]
                        </div>

                        <div className="col-sm-8">
                            <MainNav></MainNav>
                        </div>
                        <div className="col-sm-2">
                            <small>&copy; 2021</small>
                        </div>

                    </div>
                </div>
            </footer>


        </>

    )
}