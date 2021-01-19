import React from 'react'
import data from '../schema.json'
import {useHistory, useParams} from 'react-router'


export default function EggSelector() {
    const history = useHistory();

    function goBackHandle(){
        history.goBack();
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <button onClick={goBackHandle} className="back-button"> Back </button>
            </div>
            
        </div>
    )
}
