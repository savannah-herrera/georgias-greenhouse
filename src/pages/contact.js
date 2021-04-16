import React from "react"
import MainTemplate from "../layouts/mainTemplate.js"

export default function Contact() {
    return (
        <MainTemplate>
            <h2><span role="img" aria-label="telephone receiver emoji">📞 </span>Contact Us<span role="img" aria-label="telephone receiver emoji"> 📞</span></h2>

            <form name="contact" method="POST" data-netlify="true">

                <div className="row">
                    <div className="col-sm-4">
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname" name="firstname" placeholder="your first name" required className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname" name="lastname" placeholder="your last name" required className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <label for="emailaddress">Email Address</label>
                        <input type="text" id="emailaddress" name="emailaddress" placeholder="your email address" required className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <label for="emailaddress">Email Address</label>
                        <input type="text" id="emailaddress" name="emailaddress" placeholder="your email address" required className="form-control" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <label for="message">Your Message</label>
                        <textarea id="message" name="message" placeholder="your message..." required className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary call-to-action">Contact Us</button>

            </form>

        </MainTemplate>
    )
}