import { useEffect, useState } from "react";
import Country from "./country/country";
import './container.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data =>setCountries(data));
    },[])

   

    const handleVisitedCountry = country =>{
        console.log('add visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
       
    }

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    // Remove
    

    return (
        
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited country */}
            <div>
                <h3>Visited country: {visitedCountries.length}</h3>
                <ol>
                    {
                        visitedCountries.map(country => <li>{country.name.common}</li>)
                    }
                </ol>
            </div>
            {/* visited flags */}
            <div className="flags">
                {
                  visitedFlags.map(flag => <img src={flag} alt=""></img> ) 
                }
            </div>
            {/* Display country */}
           <div className="country-container">
           {
                countries.map(country => < Country 
                    key={country.cca3}
                    handleVisitedCountry={handleVisitedCountry} 
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
           </div>
        </div>
    )
}
export default Countries;