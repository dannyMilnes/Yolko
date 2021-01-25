import React from 'react'
import {useHistory} from 'react-router'
import data from './../schema.json'
import {Link} from 'react-router-dom'

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
    let egg = data.eggs.find(eggs => eggs['name'] === eggName)
    let displayName= egg.displayName
    let style = egg.style

    return (
        <div className="page-container">
            <div className="page-header">
            <button className="btn-back" onClick={goBackHandle}><span className="icon-chevron-left"></span></button>
                <h2> How do you want your {displayName}?</h2>
                
                {style.map(styles => (
                    <>
                        <p>{styles.name}</p>
                        <Link to={`/recipe/${egg.name}/${styles.name}`}> go</Link>
                    </>
                ))}
            </div>
        </div>
    )
}
