import React from 'react';
//import PropTypes from "prop-types";
import './Statistics.css'

function Statistics({title, stats}, Children) {
    //Fujncion que devuelve una lista de licon datos
    return (
        <section className='statistics'>
            <h3 className='title'>{title}</h3>

            <ul className='statsList'>
                {stats.map( (item) => (
                    <li key={item.id} className='item'>
                        <span className="label"> {item.label} </span>
                        <span className="percentage"> {item.percentage} </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    
}

export default Statistics;