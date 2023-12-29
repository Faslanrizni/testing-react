import React from 'react';
import RoomsFilter from './RoomFilter'
import RoomsList from './RoomsList';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

function RoomContainer({context}){
    const {loading,sortedRooms,rooms} = context;
    if (loading){
        return <Loading/>
    }
    return(
        <div>

            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </div>
    );

}
export default withRoomConsumer(RoomContainer)

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
