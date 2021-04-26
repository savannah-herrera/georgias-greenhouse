import * as React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
import Wishlist from "../components/wishlistComponent.js"
import "../index.scss"

const WishlistPage = () => {
    return (
        <MainTemplate>
            <h2><span role="img" aria-label="sparkles emoji">✨ </span>Wishlist<span role="img" aria-label="sparkles emoji"> ✨</span></h2>
            <Wishlist></Wishlist>
            <p>wishessssssss</p>
        </MainTemplate>
    )
}

export default WishlistPage