import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const StatisticsCont = styled.section`
margin-top: 30px;
margin-bottom: 40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const TitlePrin =  styled.h3`
margin: 0;
padding: 80px;
`;
const StatsStatic = styled.ul`
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: auto 0;
    `;
    const ItemStatic = styled.li`
    padding: 10px;
    color: aliceblue;
    background-color: rgb(175, 74, 74);
    border: 1.5px solid black;
    white-space: nowrap;
    text-overflow: ellipsis;
    `;
function Statistics({title, stats}) {
  
    return (
        <StatisticsCont>
            <TitlePrin>{title}</TitlePrin>

            < StatsStatic>
                {stats.map( (item) => (
                    < ItemStatic key={item.id} >
                        <span className="label"> {item.label} </span>
                        <span className="percentage"> {item.percentage} </span>
                    </ItemStatic>
                ))}
            </StatsStatic>
        </StatisticsCont>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default Statistics;