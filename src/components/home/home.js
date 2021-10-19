import React from 'react';
import "./home.scss";
import Button from '../button/button';
import Detailsearch from '../detailsearch/detailsearch';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Home(){
    //const [state, setstate] = useState(initialState)
    const [sm,setSm]=useState(false)
    return(
    <>
            <div>
                <img  className="logo" src="https://tesodev.github.io/jqueryLite/img/tesodevVector.png"></img>
            </div>
            <div className="logo_desc">
                Search web app
            </div> 
           
            <div className="table">
                <Detailsearch showMore={sm}/>
            </div>
                <div className="show"
                onClick={()=>{setSm(!sm)}}>
                    <a  className="show">Show more ...</a>
                   {/* show more buton dataları kapatıp acmaya yarıyor */}
                </div>
           
        
    
    </>
    )
}

export default Home;