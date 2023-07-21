import styled from 'styled-components';
export const StatisticsCont = styled.section `
    margin-top: 30px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;
export const TitlePrin =  styled.h3 `
    margin: 0;
    padding: 80px;
    `;

export const StatsStatic = styled.ul `
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: auto 0;
    `;

export const  ItemStatic = styled.li `
    padding: 10px;
    color: aliceblue;
    background-color: rgb(175, 74, 74);
    border: 1.5px solid black;
    white-space: nowrap;
    text-overflow: ellipsis;
    `;