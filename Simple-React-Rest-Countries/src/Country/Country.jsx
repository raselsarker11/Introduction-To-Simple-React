

import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // const distructure korbo country k.

    const {name, flags, population, area, language, capital, cca3} = country;


    // state hold korbay akhanay.
    const [visited, setVisited] = useState(false); 


    // state handle korbay akhanay.
    const handleVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = () => {
        handleVisitedCountry(country);
    }

    const addVisitedCountryFlags = () => {
        handleVisitedFlags(country);
    }


    return (
        <div className={`Country ? ${visited ? 'visited' : 'non-visited'}`}> 
            <h1 style={{color: visited ? 'blue' : 'white'}}>Name: {name.common}</h1>
            <img src={flags.png} alt={`Flag of ${name.common}`} />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Language: {language}</p>
            <p>capital: {capital}</p>
            <p><small>code: {cca3}</small></p>

            {/* <button onClick={passWithParams}>Mark visited</button> */}
            <button onClick={()=> handleVisitedCountry(country)}>Mark visited</button>
            <br />

            {/* <button onClick={()=> addVisitedCountryFlags()}>Add Flags</button> */}
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />

            {/*** state tregar hobay akhanay. ***/}
            <button onClick={handleVisited}>{ visited ? 'visited' : 'Going'}</button>
            <br />
            {visited ? 'Already visited this country' : 'I want to visit this country'}
            
        </div>
    );
};

export default Country;
