import React from 'react'
// import Room from './Room';
import Properties from './Properties.jsx';
import Footer from './Footer'
import MainBackground from "./MainBackground.jsx";
import Banner from "./Banner.jsx";
// export default function RoomsList({rooms}){
export default function PropertiesList({rooms, onAddToFavourites,favourites}){
    if (rooms.length === 0){
        return (
            <>
                <div className={'empty-search'}>
                    <h3>no maching searach</h3>
                </div>
                <Footer/>
            </>

        )
    }

    return(
        <>

            <section className={'propertiesList'}>

                <div className={'row roomsList-center'}>
                    {rooms.map(item => (
                        <div key={item.id} className="col-md-4 mb-3">
                            {/*<Room room={item} />*/}
                            <Properties room={item}
                                        onAddToFavourites={() => onAddToFavourites(item)}
                                        isFavourite={favourites.some((fav) => fav.id === item.id)}/>
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </>
    )
}