import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, area, population, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
            setVisited(!visited);
    }
    
    return (
        <div className={`country , ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Name: {name?.common}</h3>
            <h3>Official Name: {name?.official}</h3>
            <h4>Area: {area}</h4>
            <h4>Population: {population}</h4>
            <h4>Code: {cca3}</h4>
            <img className='flagimage' src={flags?.png} alt="" />
            <button onClick={() =>handleVisitedFlags(country.flags.png)} className='button3'>Add flag</button>
            <br />
            <button onClick={() => handleVisitedCountry(country)} className='button'>Visited country</button>
            <br />
            <button onClick={handleVisited} className='button2'>{visited ? 'visited' : 'going'}</button>
            {visited ?   '  I have visited this country' : 'I want to visit'}
        </div>

    );
};

export default Country;