import styled from 'styled-components'
//import { Link as LinkRouter } from 'react-router-dom'

export const Card = styled.div`
display: flex;
flex-wrap: wrap;
box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
padding: 20px;
justify-content: center;
cursor: pointer;

@media (max-width: 640px) {
    margin: 10px 0;
  }
&:hover {
  transform: scale(1.05);
box-shadow: 0px 0px 0px rgba(0, 0, 0, .2);
 
}

`

export const DivImage = styled.div`
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  @media (max-width: 640px) {
    width: 100%;
  }
  
`
export const Image = styled.img`
  width: 250px;
  height: 250px;
  cursor: pointer;

`
export const H3 = styled.h3`
  color: ${props => props.darckMode ? '#fff' : '#000'};
  margin-top: 10px;
  width: 100%;
  font-size: 20px;
  font-weight: 300;

`
export const DivPrice = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`
export const H2 = styled.h2`
  color: ${props => props.darckMode ? '#fff' : '#000'};
  margin-top: 13px;
  font-size: 22px;
    font-weight: 400;
`
export const Span = styled.h2`
  color: ${props => props.darckMode ? '#ff1010' : '#00a650;'};
  font-size: 15px;
  font-weight: 300;
  width: 100%;
  margin-top: 4px;
`
export const Button = styled.button`
  width: 100%;
  background: linear-gradient(to bottom,#63b8ee 5%,#468ccf 100%);
    background-color: #63b8ee;
    border-radius: 6px;
    border: 1px solid #3866a3;
    display: inline-block;
    cursor: pointer;
    color: #14396a;
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    padding: 3px 24px;
    text-decoration: none;
    text-decoration-line: none;
    text-shadow: 0px 1px 0px #7cacde;
    outline: none;
    margin-top: 10px;
    &:hover{
      background: linear-gradient(to bottom,#64cd84 5%,#429d49 100%);
    background-color: #04f700;
    }
`
export const SpanPrice = styled.h2`
  color: #555a58;
  font-size: 18px;
  font-weight: 300;
  margin-top: 13px;
  margin-left: 10px;
  text-decoration-line: line-through;

`