import React from 'react';

import PropertisFilter from './PropertiesFilter.jsx'

import PropertiesLIst from './PropertiesList.jsx';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

function PropertiesContainer({context}){
    const {loading,sortedRooms,rooms} = context;
    if (loading){
        return <Loading/>
    }
    return(
        <div>

            <PropertisFilter rooms={rooms}/>
            <PropertiesLIst rooms={sortedRooms}/>
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
