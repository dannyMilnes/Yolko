import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './Home.css'

function begin() {

}

function Home() {
    return (
        <>
        <section className="mobileArea"> 
            <div className="buttonArea">
                <button onClick= {begin()}> Begin </button>
            </div>
        </section>
        </>
    );
}

export default Home;
