import { graphql } from "gatsby"
import * as React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
import "../index.css"
// import ProductPreview from "../components/productPreview.js"
import ProductCategory from "../components/productCategory.js"

const SuppliesPage = ({ data }) => {
    return (
        <MainTemplate>
            <div className="container">
                <div className="row ourPlants">
                    <div className="col-1"></div>
                    <h2 className="col-10"><span role="img" aria-label="gloves emoji">🧤 </span>Our Supplies<span role="img" aria-label="gloves emoji"> 🧤</span></h2>
                    <div className="col-1"></div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <ProductCategory category="supply" data={data.allContentfulPlants.nodes}></ProductCategory>

                </div>
            </div>
            {/* {data.allContentfulPlants.nodes.map(plant => (
                <ProductPreview plant={plant}></ProductPreview>
            ))} */}

        </MainTemplate>
    )
}

export default SuppliesPage
export const query = graphql`
query MyQueryAndMyQuery {
    allContentfulPlants(sort: {fields: position, order: ASC}, filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        image {
          file {
            url
          }
        }
        commonName
        sciName
        light
        category
        id
        price
      }
    }
    allContentfulPlants(sort: {fields: position, order: ASC}, filter: {node_locale: {eq: "en-US"}}) {
        nodes {
          image {
            file {
              url
            }
          }
          commonName
          category
          id
          price
        }
      }
  }  
 `