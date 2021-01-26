import React, {useState, useEffect} from 'react'
import data from '../schema.json'
import {useHistory, useParams} from 'react-router'
import {Link} from 'react-router-dom'
import EggListCard from '../components/EggListCard'

import './EggSelector.css'


export default function EggSelector() {
    const history = useHistory();

    function goBackHandle(){
        history.goBack();
    }

    return (
        <div className="page-container">

            <div className="page-header">
                <button className="btn-back" onClick={goBackHandle}><span className="icon-chevron-left"></span></button>
            </div>
                <div className="page-content">
                    <div className="egg-selector-container">
                    <div className="egg-selector-grid-container">
                        {data.eggs.map((egg) => (
                            <EggListCard egg={egg}/>
                        ))}
                    </div>
                    </div>
                </div>
        </div>
    )
}
