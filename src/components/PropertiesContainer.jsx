import React, { useState } from 'react';


import PropertisFilter from './PropertiesFilter.jsx'

import PropertiesLIst from './PropertiesList.jsx';
import {withRoomConsumer} from '../context';
import Loading from './Loading';
import favouritesList from "./FavouritesList.jsx";
import PropertiesList from "./PropertiesList.jsx";
import FavouritesList from "./FavouritesList.jsx";

function PropertiesContainer({context}){
    const {loading,sortedRooms,rooms} = context;
    const [favourites, setFavourites] = useState([]);
    const addToFavourites = property => {
        if (!favourites.find(fav => fav.id === property.id)) {
            setFavourites([...favourites, property]);
        }
    };

    const removeFromFavourites = property => {
        const updatedFavourites = favourites.filter(fav => fav.id !== property.id);
        setFavourites(updatedFavourites);
    };

    const clearFavourites = () => {
        setFavourites([]);
    };


    if (loading){
        return <Loading/>
    }
    return(
        <div>

            <PropertisFilter rooms={rooms}/>
            <FavouritesList
                favourites={favourites}
                onAddToFavourites={addToFavourites}
                onRemoveFromFavourites={removeFromFavourites}
                onClearFavourites={clearFavourites}
            />
            <PropertiesList rooms={sortedRooms}
                            onAddToFavourites={addToFavourites}
                            favourites={favourites}
            />
        </div>
    );

}
export default withRoomConsumer(PropertiesContainer)

/*
import React from 'react';
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomsList';
import {RoomConsumer} from '../context';
import Loading from './Loading';
export default function RoomContainer(){
    return(
        <RoomConsumer>
            {
                (value) =>{
                    console.log(value)
                    const {loading,sorterdRooms,rooms} = value
                    if (loading){
                        return <Loading/>
                    }
                    return(
                        <div>
                            HELLO ROOM
                            <RoomsFilter rooms={rooms}/>
                            <RoomsList rooms={sorterdRooms}/>
                        </div>
                    );

                }

            }
            </RoomConsumer>

    )
}*/
