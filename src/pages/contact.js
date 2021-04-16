import React from "react"
import MainTemplate from "../layouts/mainTemplate.js"

export default function Contact() {
    return (
        <MainTemplate>
            <h2><span role="img" aria-label="telephone receiver emoji">📞 </span>Contact Us<span role="img" aria-label="telephone receiver emoji"> 📞</span></h2>

            <form name="contact" method="POST" data-netlify="true">

                <div className="row justify-content-center">
                    <div className="col-sm-4">
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


                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <label for="message">Your Message
                        <textarea id="message" name="message" placeholder="your message..." required className="form-control" />
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary call-to-action justify-content-center">Contact Us</button>

            </form>

        </MainTemplate>
    )
}