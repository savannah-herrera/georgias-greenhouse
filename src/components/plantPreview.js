import React from "react"

export default function PlantPreview({ plant }) {
    return (
        <>

            <div className="col-md-6 col-sm-12">
                <div className="ourPlants">
                    <img src={plant.image.file.url} alt={plant.commonName} key={plant.id} className="resize img-fluid" />


                    <h3 dangerouslySetInnerHTML={{ __html: plant.commonName }} className="product-title"></h3>
                    <p dangerouslySetInnerHTML={{ __html: plant.sciName }}></p>
                    <p dangerouslySetInnerHTML={{ __html: plant.light }}></p>
                    <h4 dangerouslySetInnerHTML={{ __html: plant.price }}></h4>
                </div>
            </div>
        </>
    )
}
