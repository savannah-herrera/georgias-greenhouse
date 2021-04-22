import * as React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
// import ProductCategory from "../components/productCategory.js"
import { Link } from "gatsby"
import "../index.css"

export default function ProductPage({ pageContext }) {

    const { plant } = pageContext;

    return (
        <>
            <MainTemplate>
                <div className="container col-md-6 col-sm-12">
                    <div className="product-page">
                        <h2 className="product-page-title">{plant.commonName}</h2>

                        <img src={plant.image.file.url} alt={plant.commonName} key={plant.id} className="resize img-fluid" />
                        <div >
                            <p className="product-details">{plant.sciName}</p>
                            <p className="product-details">{plant.light}</p>
                        </div>
                        <p className="price">{plant.price}</p>
                        <p className="link-button"><Link to={"/cart"} className="add-to-cart">Add to Cart</Link> <Link to="/wishlist"><span role="img" aria-label="sparkles emoji" className="add-to-wishlist">✨ </span>Wishlist</Link></p>
                    </div>
                </div>
                {/* <div className="col-md-6 col-sm-12">
                    <div className="ourPlants">
                        <img src={plant.image.file.url} alt={plant.commonName} key={plant.id} className="resize img-fluid" />


                        <h3 dangerouslySetInnerHTML={{ __html: plant.commonName }} className="product-title"></h3>
                        <p dangerouslySetInnerHTML={{ __html: plant.sciName }} className="product-description"></p>
                        <p dangerouslySetInnerHTML={{ __html: plant.light }} className="product-description"></p>
                        <p dangerouslySetInnerHTML={{ __html: plant.price }} className="price"></p>
                        <p className="link-button"><Link to={"/products/" + plant.id} className="add-to-cart">Add to Cart</Link> <Link to="/wishlist"><span role="img" aria-label="sparkles emoji" className="add-to-wishlist">✨ </span>Wishlist</Link></p>
                        <p>hellooooo</p>
                    </div>
                </div>  */}

            </MainTemplate>
        </>
    )
}
