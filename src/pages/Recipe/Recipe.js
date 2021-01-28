import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router'
import data from '../../schema.json'
import '../Recipe/Recipe.scss'

import FooterLogo from '../../components/Footer Logo/FooterLogo';

export default function Recipe() {
    const history = useHistory();
    const [seconds,setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)

    function goBackHandle(){
        history.goBack();
    }

    function toggleActive(){
        setIsActive(!isActive)
    }

    function resetHandle(){
        setSeconds(eggTime)
        setIsActive(false)
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
        interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);



    const getEggFromURL = () =>{
        const pathArray = window.location.pathname.split("/");
        const eggName = pathArray[pathArray.length-2]
        return eggName;
    }

    const getRecipeFromUrl = () =>{
        const pathArray = window.location.pathname.split("/");
        const recipe = pathArray[pathArray.length-1]
        return recipe
    }

    
    const eggName = getEggFromURL();
    const recipe = getRecipeFromUrl();

    let egg = data.eggs.find(eggs => eggs['name'] === eggName)
    let styleArr = egg.style
    let style = styleArr.find (style => style['name'] === recipe)

    const eggTime = style.recipe.time
    
    console.log(recipe)
    console.log(egg)
    console.log(style)


    return (
        <>
            <div className="page-container">
                <div className="page-header">
                    <button className="btn-back" onClick={goBackHandle}><span className="icon-chevron-left"></span></button>
                </div>
                <div className="page-content">
                    <div className="egg-timer">
                        <p className="countdown-text">{seconds}s</p>
                        <div className="btn-container">
                            <button className="btn-timer" onClick={toggleActive}>
                                {isActive ? 'Pause' : 'Start'}
                            </button>
                            <button className="btn-timer" onClick={resetHandle}>
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
                <div className="instructions">
                {style.recipe.instructions}
                </div>
            </div>
            <footer>
                <FooterLogo />
            </footer>
        </>
    )
}
