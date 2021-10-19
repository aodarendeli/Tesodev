import React, { useState, useEffect } from 'react';
import  "./detailsearch.scss";
import {cols,data} from "../../data.json";
import Button from '../button/button';
import { Link } from 'react-router-dom';
function Detailsearch(showMore){
 const [searchInput, setSearchInput] = useState('');
    const Data3=data.slice(0,3)
    const Data2=data
 const [searchData, setSearchData] = useState(Data3,Data2); 

 useEffect(() => {  
         setSearchData(searchInput);
    }, [searchInput])
useEffect(() => {
  showMore.showMore ? setSearchData(data): setSearchData(Data3)
}, [showMore])
    function filterSearch(data){
        if(searchInput === ''){
            return data;
        }
        return Data2.filter(value => {
                const val = value[0]
                .toLowerCase()
                .includes(searchInput.toLowerCase());
               if(val){
                   return value[0];
               }
          
            
        } )
    }
    return(
    <>
          
            <div >
                <input type="text" className="searchbar" onChange={e => setSearchInput(e.target.value)}/> 
            </div>
            <div className="x">
                <Button />
            </div>
         
            <div className="table">
            {
                filterSearch(searchData ).map(post => 
                    (
                        <div> 
                            <div className="row">
                            <div className="column">{cols[5]+ ': '} {post[5]}</div>
                            <div className="column">{cols[2]+ ': '} {post[2]}</div>
                            <Link   to={
                           
                                {     
                                    pathname: '/result',
                                    state:{post}
                                    }
                                }
                            className="link">Load More...</Link>

                            </div>
                     
                        <div className="data_date">
                       <div className="row">  {cols[0]+ ': '} {post[0]}</div>

                        </div>
                        <hr className="line"/>
                        </div>
                    )
)
                    
                }
            </div>
    </>
    )
}

export default Detailsearch;