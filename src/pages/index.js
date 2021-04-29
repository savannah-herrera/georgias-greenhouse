import * as React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
import "../index.scss"
import headerImage from "../images/greenhouse.png"
import handsImage from "../images/hands-with-succulents.png"
import SEO from "../components/seo.js"


// markup
export default function IndexPage({ data }) {
  return (
    <MainTemplate>

      <SEO title="Best Plants in Little Rock, AR"></SEO>

      <div className="container greeting">

        <div className="row">
          {/* <div className="col-1 col-xs-0 small"></div> */}
          <h3 className="col-12">welcome to</h3>
          {/* <div className="col-1 col-xs-0 small"></div> */}
        </div>
        <div className="row">
          {/* <div className="col-1 col-xs-0 small"></div> */}
          <h1 className="col-12">Georgia's Greenhouse!</h1>
          {/* <div className="col-1 col-xs-0 small"></div> */}
        </div>
        <div className="row">
          {/* <div className="col-1"></div> */}
          <h3 className="col-12">we're a team of plant lovers who want to provide you with the plants of your dreams.</h3>
          {/* <div className="col-1"></div> */}
        </div>

      </div>

      <div className="container">
        <img src={headerImage} alt="ourgreenhouse" className="img-fluid headerImage col-12" />
        <div className="row introText">
          <p className="col-12">Plants make life better. At Georgia’s Greenhouse, we grow everything right here, meaning they’re raised with love from root to stem.</p>
        </div>
        <div className="row introText">
          <p className="col-12">Let us help you pick out the perfect companion house plants for your home + your lifestyle. Tell us what you’re working with & we’ll do the rest! Then all that’s left to do is let your love grow. <span role="img" aria-label="two hearts emoji">💕</span></p>

        </div>
      </div>


      <div className="container newsletter">
        <div className="row">
          {/* <div className="col-1"></div> */}
          <form className="col-12">
            <h2 animate__animated animate__bounce orderTitle><span role="img" aria-label="love letter emoji">💌 </span>Join our newsletter list<span role="img" aria-label="love letter emoji"> 💌</span></h2>
          </form>
          {/* <div className="col-1"></div> */}
        </div>
        <div className="row">
          <p className="col-12 newsletterSub">Sign up to hear about new plants, special deals, and our adventures.</p>
        </div>
        <form name="newsletter" method="POST" data-netlify="true">

          <div className="row justify-content-center">
            <div className="col-12">
              <label for="firstname">First Name
                        <input type="text" id="firstname" name="firstname" placeholder="your first name" required className="form-control" />
              </label>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <label for="lastname">Last Name
                        <input type="text" id="lastname" name="lastname" placeholder="your last name" required className="form-control" />
              </label>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-12">
              <label for="emailaddress">Email Address
                        <input type="text" id="emailaddress" name="emailaddress" placeholder="your email address" required className="form-control" />
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary call-to-action justify-content-center">Join Our List!</button>
        </form>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <img src={handsImage} alt="hands-with-succulents" className="img-fluid newsletterImage" />
            </div>
          </div>
        </div>
      </div>


    </MainTemplate>
  )
}


