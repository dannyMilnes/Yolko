import React, {useState, useEffect} from 'react'
import data from '../schema.json'
import {useHistory, useParams} from 'react-router'


export default function EggSelector() {
    const history = useHistory();
    const [eggs, setEggs] = useState({});

    function goBackHandle(){
        history.goBack();
    }

    const getEggs = () => {
        setEggs(data.eggs[0].icon)
    }

    useEffect(() => {
        getEggs();
    }, [])

    return (
        <div className="page-container">
            <div className="page-header">
                <button onClick={goBackHandle} className="back-button"> Back </button>
            </div>

            

            
        </div>
    )
}
