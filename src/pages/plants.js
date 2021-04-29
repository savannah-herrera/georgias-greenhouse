import { graphql } from "gatsby"
import * as React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
import "../index.scss"
// import PlantPreview from "../components/plantPreview.js"
import ProductCategory from "../components/productCategory.js"

const PlantPage = ({ data }) => {
  return (
    <MainTemplate>
      <div className="container">
        <div className="row">
          {/* <div className="col-1"></div> */}
          <h2 className="col-12"><span role="img" aria-label="seedling emoji">🌱 </span>Our Plants<span role="img" aria-label="seedling emoji"> 🌱</span></h2>
          {/* <div className="col-1"></div> */}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <ProductCategory category="plant" data={data.allContentfulPlants.nodes}></ProductCategory>
          {/* {data.allContentfulPlants.nodes.map(plant => (
            <PlantPreview plant={plant}></PlantPreview>
          ))} */}
        </div>
      </div>

    </MainTemplate>
  )
}

export default PlantPage

export const query = graphql`
query MyQuery {
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
        priceDecimal
        sku
      }
    }
  }  
 `