import React from 'react'
import {useHistory} from 'react-router'
import data from './../schema.json'

export default function Recipe() {
    const history = useHistory();


    function goBackHandle(){
        history.goBack();
    }

    function startHandle(){
        
    }


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

    
    console.log(recipe)
    console.log(egg)
    console.log(style)


    return (
        <div className="page-container">
            <div className="page-header">
                <button className="btn-back" onClick={goBackHandle}><span className="icon-chevron-left"></span></button>
            </div>
            <div className="egg-timer">
                {style.recipe.time}
                <button onClick={startHandle}> Start </button>
            </div>
            <div className="instructions">
            {style.recipe.instructions}
            </div>
        </div>
    )
}
