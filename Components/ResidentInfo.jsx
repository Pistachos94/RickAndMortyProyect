import React, { useEffect, useState } from 'react';
import RickMorty from '../Modules/RickMorty';
import axios from 'axios';
const ResidentInfo = ({character}) => {
    const [characterData, setCharacterData]=useState({})
    useEffect(()=>{
        axios.get(character)
        .then(res=> setCharacterData(res.data))
    },[])
    console.log(characterData)
    const status=characterData.status;
    console.log(status)
    const episodesTotal=characterData.episode?.length;
    return (
        <div className="col-12 col-sm-6 cards-cont">
            <div className='card disflex'>
                <img src={characterData.image}/>
                <div className="info">
                    <p><b>{characterData.name}</b></p>
                    <p>
                        <span className={`circle ${status==="Alive" ? "green" : status==="Dead" ? "red" : "gray"}`} ></span>
                        {status}
                        <span className='specie'><span className='des'>Specie:</span> {characterData.species}</span>
                    </p>
                    <p className="des">Origin:</p>
                    <p>{characterData?.origin?.name}</p>
                    <p className="des">Episodes where appear:</p>
                    <p>{episodesTotal}</p>
                </div>
            </div> 
        </div>        
    );
};

export default ResidentInfo;