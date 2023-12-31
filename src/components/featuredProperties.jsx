import React, {Component} from 'react';
import {PropertyMain} from '../context';
import items from '../data';
import Loading from '../components/Loading';
import Room from './Properties.jsx';
import Properties from './Properties.jsx';
// import Title from './'


import loading from '../components/Loading'

class FeaturedProperties extends Component {
    static contextType = PropertyMain
    render() {
        let {loading,featuredRooms : rooms} = this.context;
        rooms = rooms.map(room =>{
            return <Properties key={room.id} room={room}/>
            // return <Properties key={room.id} room={room}/>
        })

        return (
            <section className={'featured-rooms'}>
               <h4 className={'featured-rooms-h4'}>Feature properties</h4>
                <div className={'featured-rooms-center'}>
                    {loading?<Loading/>:rooms}
                </div>

            </section>
        );
    }
}

export default FeaturedProperties;

