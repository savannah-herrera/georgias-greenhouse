import * as React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
import sav from "../images/staffphoto-sav-new.png"
import lex from "../images/staffphoto-lex-new.png"
import krystal_aya from "../images/krystal&aya.png"
import trav from "../images/trav.png"
import bex from "../images/bex.png"
import "../index.scss"
import SEO from "../components/seo.js"

const AboutPage = () => {
    return (
        <MainTemplate>

            <SEO title="About Us" description="Learn more about our community of plant lovers"></SEO>
            <div className="container">
                <h2><span role="img" aria-label="sparkles emoji">✨ </span>About Us<span role="img" aria-label="sparkles emoji"> ✨</span></h2>

                <div className="container">
                    <div className="row">
                        {/* <div className="col-2 col-xs-0"></div> */}
                        <div className="col-md-6 col-sm-12 staffBlock">
                            <img src={sav} alt="staff #1" className="img-fluid staff-pic"></img>
                            <h3 className="staff-title">Sav</h3>
                            <p>designer, illustrator, aunt</p>
                            <p>current fav plant: fishhook senecio</p>
                        </div>
                        <div className="col-md-6 col-sm-12 staffBlock">
                            <img src={lex} alt="staff #2" className="img-fluid staff-pic"></img>
                            <h3 className="staff-title">Lex</h3>
                            <p>photographer, printmaker, cat mom</p>
                            <p>current fav plant: pink princess</p>
                        </div>
                        {/* <div className="col-2 col-xs-0"></div> */}
                    </div>
                </div>
            </div>

            <div className="container friendsBlock">
                <div className="row friends">

                    <img src={bex} alt="rebecca" className="col-auto col-xs-12 img-fluid"></img>
                    <img src={krystal_aya} alt="krystal & aya" className="col-auto col-xs-12 img-fluid"></img>
                    <img src={trav} alt="travis" className="col-auto col-xs-12 img-fluid"></img>
                </div>
            </div>
        </MainTemplate>
    )
}

export default AboutPage