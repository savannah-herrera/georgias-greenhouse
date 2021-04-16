import React from "react"

export default function PlantPreview({ plant }) {
    return (
        <>
            <div className="row">
                <div className="col-sm-4 col-md-6 col-lg-4">
                    {/* <img src={plant.image.file.url} alt={plant.commonName} key={plant.id} /> */}
                </div>
                <div className="col-sm-4 col-md-6 col-lg-4">
                    <h3 dangerouslySetInnerHTML={{ __html: plant.commonName }} className="product-title"></h3>
                    <p dangerouslySetInnerHTML={{ __html: plant.sciName }}></p>
                    <p dangerouslySetInnerHTML={{ __html: plant.light }}></p>
                </div>
            </div>
        </>
    )
}
