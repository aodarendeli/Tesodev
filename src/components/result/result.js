import React, { useState, useEffect } from 'react';
import  "./result.scss";
import { useLocation } from 'react-router-dom'
import Button from '../button/button';
function Result(){
   
    let location = useLocation();
    console.log(location);
    
    return(
    <>
             <div>
                <img  className="logoresult" src="https://tesodev.github.io/jqueryLite/img/tesodevVector.png"></img>
            </div>
            <div>
            <input type="text" className="searchbar"></input>
            </div>
            <div className="ozgur">
                <Button/>
            </div>
            <div className="table">
            {
                        <div> 
                            <div className="column">Name Surname : {location.state.post[0]}</div>
                            <div className="column">City / Country : {location.state.post[5]} / {location.state.post[4]}</div>
                            <div className="column">E-Mail : {location.state.post[2]}</div>
                            <div className="column">Date : {location.state.post[3]}</div>
                            <hr className="line"/>
                        </div>
                }
            </div>
            <div>
            <img  className="dropdown_icon" src="https://img.icons8.com/material-two-tone/24/000000/sorting-arrows.png"></img>
            <select id = "dropdown" className="dropdown">
                <option value="N/A">Order By</option>
                <option value="1">Name Ascending</option>
                <option value="2">Name Descending</option>
                <option value="3">Year Ascending</option>
                <option value="4">Year Descending</option>
             </select>
            </div>
           
    </>
    )
}

export default Result;