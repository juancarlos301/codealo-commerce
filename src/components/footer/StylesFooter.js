import styled from 'styled-components'

export const AllConFooter = styled.div`
    background-color: ${props => props.darckMode ? "#343434" : "#9d9999"};
    display: flex;
    justify-content: space-around;
    height: 150px;
    align-items: center;
    min-width: 100%;
    color: ${props => props.darckMode ? "#e1e1e1b5" : "#343030"};
    flex-wrap: wrap;
`


export const H3 = styled.h3`
    font-size: 20px;
    cursor: pointer;
&:hover {
    transform: scale(1.3);
    transition: 1.5s;
}
`