import * as React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
import Cart from "../components/cart.js"
import CheckoutForm from "../components/checkoutForm.js"
import "../index.scss"
// import { Helmet } from "react-helmet"

export default function CartPage() {
    return (
        <MainTemplate>
            <h2><span role="img" aria-label="shopping cart emoji">🛒 </span>Cart<span role="img" aria-label="shopping cart emoji"> 🛒</span></h2>
            <div className="cart">
                <Cart></Cart>
            </div>
            <hr />
            <CheckoutForm></CheckoutForm>

        </MainTemplate>
    )
}





