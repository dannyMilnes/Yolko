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
                <button className="btn-back" onClick={goBackHandle}><span className="icon-chevron-left"></span></button>
                <div className="egg-selector-container">
                    {data.eggs.map((egg) => (
                        <div className="egg-card">
                            <Link to={`/cooking-method/${egg.name}`}> go</Link>
                            <p>{egg.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
