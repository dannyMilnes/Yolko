import React, {useState, useEffect} from 'react'
import data from '../schema.json'
import {useHistory, useParams} from 'react-router'
import {Link} from 'react-router-dom'


export default function EggSelector() {
    const history = useHistory();

    function goBackHandle(){
        history.goBack();
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <button onClick={goBackHandle} className="back-button"> Back </button>

                {data.eggs.map((egg) => (
                    <>
                        <p>{egg.name}</p>
                        <Link to={`/cooking-method/${egg.name}`}> go</Link>
                    </>
                ))}


            </div>

            

            
        </div>
    )
}
