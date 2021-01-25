import React from 'react'
import { Link } from 'react-router-dom'


export default function eggItem(props) { 
    //template for props and .map() of json to go through
    return (
        <>
            <li className="eggItem">
                <Link className="linkToEggStyle">
                    <img className='eggItemImg' 
                        alt='Egg Icon' 
                        src={props.icon} 
                    />
                    <h5 className="eggItemName"> {props.name}</h5>
                </Link>
            </li>

            <li className="eggStyle">
                <Link className="linkToEggRecipe">
                <h5 className="eggStyleName"> {props.styleName} </h5>
                </Link>
            </li>

            <li className="eggRecipe">
                <h3 className="eggTime"> {props.time}</h3>
                <h5 className="eggInstructions"> {props.instructions} </h5>
            </li>
        </>
    )
}
