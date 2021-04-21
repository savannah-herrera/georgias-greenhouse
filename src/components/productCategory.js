import React from "react"
import PlantPreview from "../components/plantPreview.js"

export default function ProductCategory(props) {
    return (
        <>
            {/* <h3>{props.category}</h3> */}
            {props.data.filter((node => node.category === props.category)).map(plant => (
                <PlantPreview plant={plant}></PlantPreview>
            ))}
        </>
    )
}