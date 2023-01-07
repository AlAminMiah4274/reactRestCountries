import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, population, region, area } = props.country;
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;