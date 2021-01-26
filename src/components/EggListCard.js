import React from 'react'
import { Link } from 'react-router-dom'


export default function EggListCard({egg}) { 
    //template for props and .map() of json to go through
    return (
        <Link to={`/cooking-method/${egg.name}`}>
            <div className="egg-card">
                <img className="eggIcon" src={`assets/svg/${egg.icon}`} alt={egg.name}></img>
                <p className="eggName">{egg.name}</p>
            </div>
        </Link>
    )
}


