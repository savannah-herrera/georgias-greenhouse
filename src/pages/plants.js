import { graphql } from "gatsby"
import * as React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
import "../index.scss"
import ProductCategory from "../components/productCategory.js"
import SEO from "../components/seo.js"

const PlantPage = ({ data }) => {
  return (
    <MainTemplate>
      <SEO title="Our Plants" description="Check out our selection of houseplants"></SEO>
      <div className="container">
        <div className="row">

          <h2 className="col-12"><span role="img" aria-label="seedling emoji">🌱 </span>Our Plants<span role="img" aria-label="seedling emoji"> 🌱</span></h2>

        </div>
      </div>
      <div className="container">
        <div className="row">
          <ProductCategory category="plant" data={data.allContentfulPlants.nodes}></ProductCategory>
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
        slug
      }
    }
  }  
 `