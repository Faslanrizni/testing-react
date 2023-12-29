import React, {Component} from 'react';
import {RoomContext} from '../context';
import items from '../data';
import Loading from '../components/Loading';
import Room from '../components/Room';
// import Title from './'


import loading from '../components/Loading'

class FeaturedProperties extends Component {
    static contextType = RoomContext
    render() {
        let {loading,featuredRooms : rooms} = this.context;
        rooms = rooms.map(room =>{
            return <Room key={room.id} room={room}/>
        })

        return (
            <section className={'featured-rooms'}>
               <h4 className={'featured-rooms-h4'}>Feature properties</h4>
                <div className={'featured-rooms-center'}>
                    {loading?<Loading/>:rooms}
                </div>

                {/*<Room />*/}
            </section>
        );
    }
}

export default FeaturedProperties;

