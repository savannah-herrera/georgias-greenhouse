import { graphql } from "gatsby"
import * as React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
import "../index.scss"
import ProductCategory from "../components/productCategory.js"
import SEO from "../components/seo.js"

const SuppliesPage = ({ data }) => {
  return (
    <MainTemplate>
      <SEO title="Our Supplies" description="Get the tools and supplies you need"></SEO>
      <div className="container">
        <div className="row">

          <h2 className="col-12"><span role="img" aria-label="gloves emoji">🧤 </span>Our Supplies<span role="img" aria-label="gloves emoji"> 🧤</span></h2>

        </div>
      </div>

      <div className="container">
        <div className="row">
          <ProductCategory category="supply" data={data.allContentfulPlants.nodes}></ProductCategory>
        </div>
      </div>


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
        priceDecimal
        sku
        slug
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
          priceDecimal
          sku
          slug
        }
      }
  }  
 `