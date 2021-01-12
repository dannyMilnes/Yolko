import React from 'react';
import './Home.scss';

// Components
import Logo from '../../components/Logo/Logo';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// import './Home.css'

function begin() {

}

function Home() {
    return (
        <div className="page-container">  
            <div className="joke-container">
                <p>Whats your favourite day of the week?<br /><b>-Fry-day!</b></p>
            </div>
            <div className="logo-container">
                <Logo />
                <button className="btn__main" onClick= {begin()}> Begin </button>
            </div>
        </div>
    );
}

export default Home;
