import {useState, useEffect} from 'react';
import axios from 'axios';
import ResidentInfo from '../Components/ResidentInfo';
const RickMorty = () => {
    const[getLocation,setGetLocation]=useState({})
    const[searchValue,setSearchValue]=useState("")
    const random=Math.floor(Math.random()*125)+1;
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
        .then(res=>setGetLocation(res.data))
        
        
    },[])
    const searchByid=()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`)
        .then(res=>setGetLocation(res.data))
        
    }
    console.log(getLocation);
    const population=getLocation.residents?.length
    return (
        <div>
            <div className="bg-Image">
            </div>
            <div className="cont">
                <h1>Rick and Morty Wiki</h1>
                <div className="disflex searchCont">
                    <input type="text" className="search"
                        placeholder='Type an id betwwen 1 - 126' 
                        value={searchValue} 
                        onChange={e=>setSearchValue(e.target.value)}/>
                
                <button onClick={searchByid}>Search</button>
                </div>
                <div className="infoCont disflex">
                    <div className="col-6 col-sm-3">
                        <h4>
                            Name:
                        </h4>
                        {getLocation.name}
                    </div>
                    <div className="col-6 col-sm-3">
                        <h4>
                            Type:
                        </h4>       
                        {getLocation.type}                     
                    </div>
                    <div className="col-6 col-sm-3">
                        <h4>
                            Dimension:      
                        </h4>
                        {getLocation.dimension}                         
                    </div>
                    <div className="col-6 col-sm-3">
                        <h4>
                            Poblation:
                        </h4>         
                        {population}           
                    </div>
                </div>
                <h2>Residents:</h2>
                <div className="row disflex">
                        {getLocation.residents?.map(character =>(                          
                            <ResidentInfo character={character} key={character}/>                       
                        ))}                 
                </div>
            </div>
          
        </div>
    );
};

export default RickMorty;