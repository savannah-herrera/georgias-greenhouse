import React from "react"
import { Link } from "gatsby"
import AddToCart from "../components/add-to-cart.js"

export default function PlantPreview({ plant }) {
    return (
        <>

            <div className="col-md-6 col-sm-12">
                <div className="ourPlants">
                    <img src={plant.image.file.url} alt={plant.commonName} key={plant.id} className="resize img-fluid" />


                    <Link to={"/products/" + plant.id}><h3 dangerouslySetInnerHTML={{ __html: plant.commonName }} className="product-title"></h3></Link>
                    <p dangerouslySetInnerHTML={{ __html: plant.sciName }} className="product-description"></p>
                    <p dangerouslySetInnerHTML={{ __html: plant.light }} className="product-description"></p>
                    <p className="price">${plant.priceDecimal}</p>
                    <p className="link-button">

                        <AddToCart item={{ sku: plant.sku, price: plant.priceDecimal, name: plant.commonName }}></AddToCart>

                        {/* <Link to="/checkout" className="add-to-cart">Add to Cart</Link>  */}

                    </p>
                </div>
            </div>
        </>
    )
}
