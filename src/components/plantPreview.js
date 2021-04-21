import React from "react"
import { Link } from "gatsby"

export default function PlantPreview({ plant }) {
    return (
        <>

            <div className="col-md-6 col-sm-12">
                <div className="ourPlants">
                    <img src={plant.image.file.url} alt={plant.commonName} key={plant.id} className="resize img-fluid" />


                    <h3 dangerouslySetInnerHTML={{ __html: plant.commonName }} className="product-title"></h3>
                    <p dangerouslySetInnerHTML={{ __html: plant.sciName }} className="product-description"></p>
                    <p dangerouslySetInnerHTML={{ __html: plant.light }} className="product-description"></p>
                    <p dangerouslySetInnerHTML={{ __html: plant.price }} className="price"></p>
                    <p className="link-button"><Link to={"/products/" + plant.id} className="add-to-cart">Add to Cart</Link> <Link to="/wishlist"><span role="img" aria-label="sparkles emoji" className="add-to-wishlist">✨ </span>Wishlist</Link></p>
                    <p className="link-button"></p>
                </div>
            </div>
        </>
    )
}
