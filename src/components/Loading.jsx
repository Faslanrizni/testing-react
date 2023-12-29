import React from 'react'
import loading from '../assets/loading.jpg';
export default function Loading(){
    return(
        <div className={'loading'}>
            <h4>loading.......</h4>
            <img src={loading} alt="loading"/>
        </div>
    );
}