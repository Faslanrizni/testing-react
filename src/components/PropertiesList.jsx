import React from 'react'
// import Room from './Room';
import Properties from './Properties.jsx';
import Footer from './Footer'
import MainBackground from "./MainBackground.jsx";
import Banner from "./Banner.jsx";
// export default function RoomsList({rooms}){
export default function PropertiesList({rooms}){
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



           {/* <div className="card bg-dark text-white">
                <img className="card-img" src="https://img.freepik.com/free-vector/https://img.freepik.com/free-photo/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg?size=626&ext=jpg&ga=GA1.1.1313303609.1697107729&semt=sph" alt="Card image" />
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <div>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>

                </div>
            </div>*/}
            <section className={'propertiesList'}>

                <div className={'row roomsList-center'}>
                    {rooms.map(item => (
                        <div key={item.id} className="col-md-4 mb-3">
                            {/*<Room room={item} />*/}
                            <Properties room={item} />
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </>
    )
}