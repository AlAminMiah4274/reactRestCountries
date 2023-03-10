import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, population, region, area, flags } = props.country;
    // console.log(props.country);
    return (
        <div className='country bg-info'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;