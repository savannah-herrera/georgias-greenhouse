import React, { useContext } from "react"
import { CartContext } from "../../shopping.js"
import { Link } from "gatsby"

export default function MainNav() {
    const { itemCount } = useContext(CartContext)

    return (
        <ul className="mainNav">
            <li><Link to="/"><span role="img" aria-label="house emoji">🏡 </span>Home</Link></li>
            <li><Link to="/contact"><span role="img" aria-label="telephone receiver emoji">📞 </span>Contact</Link></li>
            <li><Link to="/plants"><span role="img" aria-label="seedling emoji">🌱 </span>Plants</Link></li>
            <li><Link to="/supplies"><span role="img" aria-label="gloves emoji">🧤 </span>Supplies</Link></li>
            <li><Link to="/about"><span role="img" aria-label="sparkles emoji">✨ </span>About</Link></li>
            <li><Link to="/checkout"><span role="img" aria-label="shopping cart emoji">🛒 </span>Cart (<span className="badge badge-light badge-colors">{itemCount === 0 && <strong>0</strong>
            }

                {itemCount > 0 &&
                    <span class="badge badge-light badge-colors">{itemCount}</span>} </span>)
            </Link></li>
            <li>


            </li>
        </ul>


    )
}
