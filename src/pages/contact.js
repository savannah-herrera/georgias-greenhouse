import React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
import succulents from "../images/succulents.png"
import cacti from "../images/cacti.png"
// import SEO from "../components/seo.js"

export default function Contact() {
    return (
        <MainTemplate>

            {/* <SEO title="Contact Us" description="Call, Email, Text or Come By"></SEO> */}

            <h2><span role="img" aria-label="telephone receiver emoji">📞 </span>Contact Us<span role="img" aria-label="telephone receiver emoji"> 📞</span></h2>

            <div className="container">
                <div className="col-12">
                    <form name="contact" method="POST" data-netlify="true" action="/thankyou">

                        <input type="hidden" name="form-name" value="contact" />

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


                        <div className="row justify-content-center">
                            <div className="col-12">
                                <label for="message">Your Message
                        <textarea id="message" name="message" placeholder="your message..." required className="form-control" />
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary call-to-action justify-content-center">Contact Us</button>

                    </form>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <img src={succulents} alt="succulents" className="img-fluid contactImage col-6 col-xs-12"></img>


                    {/* <div className="row friends"> */}

                    <img src={cacti} alt="cacti" className="img-fluid contactImage col-6 col-xs-12" />
                </div>
            </div>


        </MainTemplate>
    )
}