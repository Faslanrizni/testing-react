import React from "react";
import FeaturedProperties from '../components/featuredProperties';
import Footer from '../components/Footer';
import Banner from "../components/Banner.jsx";
import MainBackground from "../components/MainBackground.jsx";

const SearchPage = ()=>{
    return (
        <>
            <div className="card bg-dark text-white">
                <MainBackground main={"featuredProperties"} >
                    <Banner title={'Feature properties'} subTitle={'rem Ipsum is simply dummy . Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an maIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'}>
                    </Banner>
                </MainBackground>
                {/*<img className="card-img" src="https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?size=626&ext=jpg&ga=GA1.2.1313303609.1697107729&semt=sph" alt="Card image" />
                <div className="card-img-overlay">
                    <h5 className="card-title card-title-1 ">Explore more properties for sale</h5>
                    <div className={'card-description-1'}>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p className="card-text">Last updated 3 mins ago</p>
                    </div>

                </div*/}>
            </div>
            <FeaturedProperties/>
            <Footer/>

        </>
    );
}
export default  SearchPage;