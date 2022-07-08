import styled from 'styled-components'



export const AllContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
background: ${props => props.darckMode ? '#202124' : '#ebebeb'};
min-height: 80vh;


`
export const ButtonDelete = styled.button`
cursor: pointer;
`
export const CheckoutCon = styled.div`
 grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  padding: 0 0 4em 0;
  max-width: 80%;
  color: aliceblue;
  margin: 30px 0 ;
  border: 2px solid ${props => props.darckMode ? '#fff' : '#83868f'};;
  padding: 30px;
  border-radius: 10px;
  @media (max-width: 500px) {
  display: flex;
  flex-wrap: wrap;
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
export const ButtonBar = styled.div`
 background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
  background-color: #63b8ee;
  border-radius: 6px;
  border: 1px solid #3866a3;
  display: inline-block;
  cursor: pointer;
  color: #14396a;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-decoration-line: none;
  text-shadow: 0px 1px 0px #7cacde;
  width: 100%;
  outline: none;
  margin-top: 10px;
  &:hover{
      background: linear-gradient(to bottom,#64cd84 5%,#429d49 100%);
    background-color: #04f700;
    color: #fff
    }
`
export const H2 = styled.h2`
color: ${props => props.darckMode ? '#fff' : '#202124'}; 
`
export const H4 = styled.h4`
color: ${props => props.darckMode ? '#fff' : '#202124'}; 
`
export const H5 = styled.h5`
color: ${props => props.darckMode ? '#fff' : '#202124'}; 
`
export const H3 = styled.h3`
color: ${props => props.darckMode ? '#fff' : '#202124'}; 
`