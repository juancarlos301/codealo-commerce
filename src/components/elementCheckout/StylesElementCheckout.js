import styled from 'styled-components'

export const Button = styled.button`
cursor: pointer;
& svg {
  fill: ${props => props.darckMode ? "#fff" : "#000"};
}
& svg:hover  {
  fill: ${props => props.red ? "red" : "green"};
}
`
export const ItemCheck = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0 0;
`
export const ElementCheck = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${props => props.darckMode ? '#fff' : '#202124'};
`
export const H4 = styled.h4`
color: ${props => props.darckMode ? '#fff' : '#202124'}; 
`
export const H5 = styled.h5`
color: ${props => props.darckMode ? '#fff' : '#202124'}; 
width: 100%;
`
export const Image = styled.img`
  width: 80px;
  height: 80px;
@media (max-width: 600px) {
  width: 50px;
  height: 50px;
}
`
export const H5Amount = styled.h5`
color: #fff; 
background-color: red;
border-radius: 50%;
width: fit-content;
padding: 4px;
`
export const DivAmount = styled.div`
  display: flex;
  justify-content: center;
`