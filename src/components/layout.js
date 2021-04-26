import React from "react"
import "./index.scss"
import { CartContextProvider } from "../../shopping.js"
// import MainNav from "./mainNav.js"
import MainTemplate from "../layouts/mainTemplate"

export default function Layout({ children }) {
    return (
        <CartContextProvider>
            <div className="container">
                <MainTemplate>
                    <hr />
                    {children}
                </MainTemplate>
            </div>
        </CartContextProvider>
    )
}