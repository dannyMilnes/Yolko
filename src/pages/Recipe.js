import React from 'react'
import {useHistory, useParams} from 'react-router'

export default function Recipe() {
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
