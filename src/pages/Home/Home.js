import React, {useEffect, useState}  from 'react';
import './Home.scss';
import data from '../../schema.json'

// Components
import Logo from '../../components/Logo/Logo';

import {Link} from "react-router-dom";


function Home() {

    const [joke, setJoke] = useState({});

    const getJoke = () => {
        const random = Math.floor(Math.random() * data.jokes.length)
        setJoke(data.jokes[random])
    }

    useEffect(() => {
        getJoke();
    }, [])

    return (
        <div className="page-container">  
            <div className="joke-container">
                <p>{joke.setup}<br /><b>-{joke.punchline}</b></p>
            </div>
            <div className="logo-container">
                <Logo />
                <Link className="btn-main" to="/egg-type"> Begin </Link>
            </div>
        </div>
    );
}

export default Home;