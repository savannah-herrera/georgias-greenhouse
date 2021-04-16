import { graphql } from "gatsby"
import * as React from "react"
import MainTemplate from "../layouts/mainTemplate.js"
import "../index.css"
import PlantPreview from "../components/plantPreview.js"

const PlantPage = ({ data }) => {
  return (
    <MainTemplate>
      <div className="container">
        <div className="row ourPlants">
          <div className="col-1"></div>
          <h2 className="col-10"><span role="img" aria-label="potted plant emoji">🪴 </span>Our Plants<span role="img" aria-label="potted plant emoji"> 🪴</span></h2>
          <div className="col-1"></div>
        </div>
      </div>

      {data.allContentfulPlants.nodes.map(plant => (
        <PlantPreview plant={plant}></PlantPreview>
      ))}

    </MainTemplate>
  )
}

export default PlantPage

export const query = graphql`
query MyQuery {
    allContentfulPlants(sort: {fields: position, order: ASC}) {
      nodes {
        image {
          file {
            url
          }
        }
        commonName
        sciName
        light
      }
    }
  }  
 `