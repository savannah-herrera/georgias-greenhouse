import React, { useContext } from "react"
import { CartContext } from "../../shopping.js"

export default function AddToCart({ item }) {
    const { addProduct } = useContext(CartContext)
    return (
        <>
            <button onClick={() => addProduct(item)} className="add-to-cart">Add to Cart</button>
        </>
    )
}