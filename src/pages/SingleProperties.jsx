import React, { useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import { PropertyMain } from "../context.jsx";
// import { PropertyMain } from "../context.jsx";
import ImageSlider from "../components/ImageSlider.jsx";

export default function SingleProperties() {
    const { tenure } = useParams();
    const { getRoom } = useContext(PropertyMain);
    const room = getRoom(tenure);


    if (!room) {
        return (
            <div className={'error'}>
                <h3>not found</h3>
                <Link to={'/rooms'} className={'btn btn-primary'}>Back to home</Link>
            </div>
        );
    }
    const {type, description,bedrooms,price,location,picture,images,addedDate,addedYear,addedMonth}=room
    const imagesArray = Array.isArray(images) ?images: [images];
    return (
        <>

            <div className="container-fluid im setWidth">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <ImageSlider images={imagesArray} />
                    </div>
                </div>
            </div>
            <section className={'single-property'}>
                <div className={'container-fluid '}>
                        {imagesArray.map((item,index)=>{
                            return <img key={index} src={item} alt={type}  className="mx-3 my-3"/>;
                            console.log(imagesArray)
                        })}
                </div>
                <div className=" container-fluid single-property-info">
                    <article className={'description'}>
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className={' container info'}>
                        <h3>Extra Informations</h3>
                        <p>price: ${price}</p>
                        <p>Property Type: {type}</p>
                        <p>bedroom No: {bedrooms}</p>
                        <p>location: {location}</p>
                        <p> Added Date : {addedDate} th {addedMonth} {addedYear}</p>
                    </article>
                </div>
            </section>
        </>
    );
}
