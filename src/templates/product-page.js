import React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
import AddToCart from "../components/add-to-cart.js"
import "../index.scss"
import SEO from "../components/seo.js"

export default function ProductPage({ pageContext }) {

    const { plant } = pageContext;

    return (
        <>
            <MainTemplate>

                <SEO title={plant.commonName} description={`Come see our ${plant.light}s at Georgia's Greenhouse`}></SEO>
                <div className="container col-md-6 col-sm-12">
                    <div className="product-page">
                        <h2 className="product-page-title">{plant.commonName}</h2>

                        <img src={plant.image.file.url} alt={plant.commonName} key={plant.id} className="resize img-fluid" />
                        <div >
                            <p className="product-details">{plant.sciName}</p>
                            <p className="product-details">{plant.light}</p>
                        </div>
                        <p className="price">${plant.priceDecimal}</p>





                        <p className="link-button"> <AddToCart item={{ sku: plant.sku, price: plant.priceDecimal, name: plant.commonName }}></AddToCart>

                            {/* <Link to={"/checkout"} className="add-to-cart">Add to Cart</Link> */}

                        </p>
                    </div>
                </div>


            </MainTemplate>
        </>
    )
}
