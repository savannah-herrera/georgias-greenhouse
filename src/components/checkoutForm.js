import React, { useState } from "react"
// import axios from "axios"

export default function CheckoutForm() {

    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");

    function saveOrder() {
        alert("This is sample cart, your order was not really completed.")

        // let customer = {
        //     fullname: fullname,
        //     email: email,
        // }
        // axios.post("https://webhook.site/1022c860-ad18-46d0-9699-c8a6ad5ba435", customer);
    }

    return (
        <>
            <div className="orderForm">
                <h3>Your Order Reservation</h3>

                <form name="reservation" method="POST" data-netlify="true" action="/thankyou">
                    <div class="form-group">
                        <label for="ordername">Email address
                <input type="email" class="form-control" id="ordername" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </label>
                    </div>
                    <div class="form-group">
                        <label for="orderemail">Your Name
                <input type="text" class="form-control" id="orderemail" placeholder="Hungry Harry" value={fullname} onChange={(e) => { setFullname(e.target.value) }} />
                        </label>
                    </div>

                    <p>
                        <div class="form-group">
                            <label for="ordertime">Pick Up Time
                <input type="time" class="form-control" id="ordertime" placeholder="Hungry Harry" />
                            </label>
                        </div>
                    </p>

                    <button className="btn btn-md btn-primary add-to-cart" onClick={() => saveOrder()}>Place Order</button>

                </form>
            </div>
        </>
    )
}