import React from "react";
import {BrowserRouter as Router,Routes, Link} from "react-router-dom";
import './App.css'


import Home from "./pages/Home";
import Properties from "./components/Properties.jsx";
import ErrorPage from "./pages/ErrorPage";
import ResulPage from "./pages/ResultPage";
import SearchPage from "./pages/SearchPage";
import SingleProperties from "./pages/singleProperties";

import Navbar from './components/Navbar';
import {Route} from 'react-router-dom';



function App() {


    return (
        <>




        <Router>
            <div className={"main"}>
                <Navbar/>
                <Routes>
                    {/*<Switch>*/}
                    <Route exact path={'/'} element={<Home/>}  />
                    {/*<Route exact path={'/rooms'} element={<Room/>} />*/}
                    <Route  path={'/rooms/:tenure'} element={<SingleProperties/>} />
                    <Route  path={'/errorPage'} element={<ErrorPage />} />
                    <Route  path={'/searchPage'} element={ <SearchPage />} />
                    <Route  path={'/resultPage'} element={<ResulPage />} />
                    <Route  element={<ErrorPage />} />
                    {/*</Switch>*/}
                </Routes>
            </div>

        </Router>
        </>

    )
}


export default App
