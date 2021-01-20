import React, {useState} from 'react'
import {useHistory, useParams} from 'react-router'
import data from './../schema.json'

export default function CookingMethod() {
    const history = useHistory();
    

    function goBackHandle(){
        history.goBack();
    }

    
    const getEggFromURL = () =>{
        const pathArray = window.location.pathname.split("/");
        const eggName = pathArray[pathArray.length-1]
        return eggName;
    }

    const eggName = getEggFromURL();


    return (
        <div className="page-container">
            <div className="page-header">
                {eggName}
                <button onClick={goBackHandle} className="back-button"> Back </button>
            </div>
        </div>
    )
}
