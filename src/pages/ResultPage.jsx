import React from "react";
import RoomContainer from '../components/RoomContainer';
import MainBackground from "../components/MainBackground.jsx";
import Banner from "../components/Banner.jsx";

const ResultPage = ()=>{
    return (
        <>

            <MainBackground main={"featuredProperties"} >
                <Banner title={'Feature properties'} subTitle={'rem Ipsum is simply dummy . Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an maIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essent'}>
                </Banner>
            </MainBackground>
            <RoomContainer />

        </>
    )
}
export default  ResultPage;