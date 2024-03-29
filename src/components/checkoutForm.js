import React, { useState } from "react"
import 'animate.css'

export default function CheckoutForm() {

    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState("");

    function saveOrder() {
        alert("This is sample cart, your order was not really completed.")
    }

    return (
        <>
            <div className="orderForm">
                <div className="container">
                    <div className="col-12 orderTitle">
                        <h3 className="animate__animated animate__heartBeat animate__delay-3s orderTitle">Your Order Reservation</h3>
                    </div>
                    <form name="reservation" method="POST" data-netlify="true" action="/checkout">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                {/* <div class="form-group"> */}
                                <label for="ordername">Email address
                                    <input type="email" class="form-control" id="ordername" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                </label>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-10">
                                {/* <div class="form-group"> */}
                                <label for="orderemail">Your Name
                                    <input type="text" class="form-control" id="orderemail" placeholder="your name" value={fullname} onChange={(e) => { setFullname(e.target.value) }} />
                                </label>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-10">

                                {/* <div class=""> */}
                                <label for="ordertime">Pick Up Time
                                                <input type="time" class="form-control" id="ordertime" placeholder="your name" />
                                </label>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <div class="form-group">
                                    <button className="btn btn-md btn-primary add-to-cart" onClick={() => saveOrder()}>Place Order</button>
                                </div>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}