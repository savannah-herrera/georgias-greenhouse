import { Link } from "gatsby"
import React from "react"

export default function MainNav() {
    return (
        <ul className="mainNav">
            <li><Link to="/"><span role="img" aria-label="house emoji">🏡 </span>Home</Link></li>
            <li><Link to="/contact"><span role="img" aria-label="telephone receiver emoji">📞 </span>Contact</Link></li>
            <li><Link to="/plants"><span role="img" aria-label="potted plant emoji">🪴 </span>Plants</Link></li>
            <li><Link to="/supplies"><span role="img" aria-label="gloves emoji">🧤 </span>Supplies</Link></li>
            <li><Link to="/wishlist"><span role="img" aria-label="sparkles emoji">✨ </span>Wishlist</Link></li>
            <li><Link to="/contact"><span role="img" aria-label="shopping cart emoji">🛒 </span>Cart</Link></li>
        </ul>
    )
}
