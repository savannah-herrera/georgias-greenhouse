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
            <div className="col-2 col-xs-1"></div>
            <div className="col-4 col-xs-12">
              <img src={sav} alt="staff #1"></img>
              <h3>sav</h3>
              <p>lorem ipsum</p>
            </div>
            <div className="col-4 col-xs-12">
              <img src={lex} alt="staff #2"></img>
              <h3>lex</h3>
              <p>lorem ipsum</p>
            </div>
            <div className="col-2 col-xs-1"></div>
          </div>
        </div>
      </div>


      <div className="container newsletter">
        <div className="row">
          <div className="col-1"></div>
          <form className="col-10">
            <h3>Join our newsletter list!</h3>
          </form>
          <div className="col-1"></div>
        </div>
      </div>


    </MainTemplate>
  )
}

export default IndexPage
