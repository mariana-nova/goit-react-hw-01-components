import React from 'react';
import PropTypes from "prop-types";
import './Statistics.css'

function Statistics({title, stats}, Children) {
   
    return (
        <section className='statistics'>
            <h3 className='title'>{title}</h3>

            <ul className='statsList'>
                {stats.map( (item) => (
                    <li className='item'>
                        <span className="label"> {item.label} </span>
                        <span className="percentage"> {item.percentage} </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
        } )
    ).isRequired,
};

export default Statistics;