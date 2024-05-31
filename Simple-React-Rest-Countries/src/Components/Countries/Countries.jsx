import { useEffect, useState } from "react";
import Country from "../../Country/Country";
import './Countries.css';

const Countries = () => {
    // Amara j khanay state declare korbo sekhanay even handler o declaire korbo.
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);


    // Even handler declared korlam.
    const handleVisitedCountry = (country) => {
        console.log('Add visited country list')
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);

    }

    const handleVisitedFlags = flag => {
        console.log('Add visited country flags');
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags)
    }

    return (
        <div>
            <h1>Countries: {countries.length}</h1>

            {/* visited country list */}
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => 
                        <li key = {country.cca3}> 
                            {country.name.common}
                        </li>)
                    }   
                </ul>
            </div>

            {/* flag gulo dakhabo. */}
            <div className="flag-container">
                {
                    visitedFlags.map(flag => <img src="{flag.png}"></img>)
                }
            </div>
            {/* visited countries. */}
            <div className="country-container">
            {
                countries.map(country => 
                    <Country 
                        key={country.cca3} // Unique identifier for each country
                        handleVisitedCountry={handleVisitedCountry} // visited country list.
                        handleVisitedFlags = {handleVisitedFlags} // visited countries flags
                        country={country} // Passing the whole country object as a prop
                    />
                )
            }
            </div>
        </div>
    );
};

export default Countries;
