// import { graphql } from "gatsby"
import * as React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
// import { graphql } from "gatsby"
import "../index.css"
import sav from "../images/sav.png"
import lex from "../images/lex.png"


// markup
const IndexPage = () => {
  return (
    <MainTemplate>
      <div className="container greeting">

        <div className="row">
          <div className="col-1"></div>
          <h3 className="col-10">welcome to</h3>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <h1 className="col-10">Georgia's Greenhouse!</h1>
          <div className="col-1"></div>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <h3 className="col-10">we're a team of plant lovers who want to provide you with the plants of your dreams</h3>
          <div className="col-1"></div>
        </div>

      </div>

      <div className="container">
        <div className="row ourTeam">
          <div className="col-1"></div>
          <h2 className="col-10"><span role="img" aria-label="two hearts emoji">💕 </span>Our Team<span role="img" aria-label="two hearts emoji"> 💕</span></h2>
          <div className="col-1"></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-2 col-xs-0"></div>
            <div className="col-md-4 col-sm-12 staffBlock">
              <img src={sav} alt="staff #1" className="img-fluid staff-pic"></img>
              <h3 className="staff-title">Sav</h3>
              <p>designer, illustrator, aunt</p>
              <p>current fav plant: fishhook senecio</p>
            </div>
            <div className="col-md-4 col-sm-12 staffBlock">
              <img src={lex} alt="staff #2" className="img-fluid staff-pic"></img>
              <h3 className="staff-title">Lex</h3>
              <p>photographer, printmaker, cat mom</p>
              <p>current fav plant: pink princess</p>
            </div>
            <div className="col-2 col-xs-0"></div>
          </div>
        </div>
      </div>


      <div className="container newsletter">
        <div className="row">
          <div className="col-1"></div>
          <form className="col-10">
            <h2><span role="img" aria-label="love letter emoji">💌 </span>Join our newsletter list<span role="img" aria-label="love letter emoji"> 💌</span></h2>
          </form>
          <div className="col-1"></div>
        </div>

        <form name="contact" method="POST" data-netlify="true">

          <div className="row justify-content-center">
            <div className="col-sm-4 col-8">
              <label for="firstname">First Name
                        <input type="text" id="firstname" name="firstname" placeholder="your first name" required className="form-control" />
              </label>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-4">
              <label for="lastname">Last Name
                        <input type="text" id="lastname" name="lastname" placeholder="your last name" required className="form-control" />
              </label>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-4">
              <label for="emailaddress">Email Address
                        <input type="text" id="emailaddress" name="emailaddress" placeholder="your email address" required className="form-control" />
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary call-to-action justify-content-center">Contact Us</button>
        </form>
      </div>


    </MainTemplate>
  )
}

export default IndexPage
