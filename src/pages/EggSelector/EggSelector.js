import React from 'react'
import data from '../../schema.json'
import {useHistory} from 'react-router'
import EggListCard from '../../components/EggListCard'

import '../EggSelector/EggSelector.scss'
import FooterLogo from '../../components/Footer Logo/FooterLogo'


export default function EggSelector() {
    const history = useHistory();

    function goBackHandle(){
        history.goBack();
    }

    return (
        <div className="page-container">

            <div className="page-header">
                <button className="btn-back" onClick={goBackHandle}><span className="icon-chevron-left"></span></button>
                <div className="header-text-container">
                    <h2>What eggs are you cracking today?</h2>
                </div>
            </div>
                <div className="page-content">
                    <div className="egg-selector-container">
                    {/* <div className="egg-selector-grid-container"> */}
                        {data.eggs.map((egg) => (
                            <EggListCard className="egg-selector-grid-item" egg={egg}/>
                        ))}
                    {/* </div> */}
                    </div>
                </div>
            <footer>
                <FooterLogo />
            </footer>
        </div>
    )
}
