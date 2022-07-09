import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AllContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px;
  background: ${props => props.darckMode ? '#202124' : '#ebebeb'};

`
export const InformationCon = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  margin: 0 0 4em 0;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  min-height: 80vh;
  background-color: #c2e2fd;
  border: 2px solid ${props => props.darckMode ? '#fff' : '#83868f'};

  @media (max-width: 600px) {
  display: flex;
  flex-wrap: wrap;
  
}
`

export const ConButtons = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`
export const SlideBar = styled.div`
margin: 10px 0 0 0;
padding: 20px 15px 20px 0;

`
export const InfoItem = styled.div`
 display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 400px) {
  width: 70vw;

}
`
export const InfoElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${props => props.darckMode ? '#fff' : '#83868f'};
  flex-wrap: wrap;
`

export const H2 = styled.h2`
margin-bottom: 20px;
color: #000;

`
export const Span = styled.span`
color: #000;

`

export const Title = styled.h4`
color: #000;
`
export const ContainerA = styled.div`
padding: 20px;
background-color: #c2e2fd;
@media (max-width: 500px) {
  padding: 2px;
}

`
export const ButtonBuy = styled.div`
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
  outline: none;
  margin-top: 10px;
  &:hover{
      background: linear-gradient(to bottom,#64cd84 5%,#429d49 100%);
    background-color: #04f700;
    }
`

export const Linked = styled(Link)`
text-decoration: none;
color: #000;
&:hover {
  transform: scale(1.2s);
}
`