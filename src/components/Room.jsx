import React from "react";
import {Link} from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
export default function Room({room}){
    const {type,price,picture,images,tenure} = room;
    // const imagesArray = Array.isArray(images) ? images : (picture ? [picture] : []);

    return(
        <article className={'room'}>
            <div className="img-container">
                {/*<img src={imagesArray[0] || ''} alt="properties" />*/}
                <img src={picture} alt="properties"/>
                <div className="favourite">
                    <CiHeart />
                    Add to favourite
                </div>


                {/*<div> {price} {type}</div>*/}

                <div className="price-top">
                    <h6>${price} per month</h6>
                </div>
                {/*<Link to={'#'} className={'btn btn-warning'}>Read More</Link>*/}
                <Link to={`/rooms/${tenure}`} className={'room-link btn-primary'}>Reed More</Link>
            </div>
            <p className={'property-name'}>{type}</p>



        </article>
    );

}