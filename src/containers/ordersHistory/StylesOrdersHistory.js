import styled from 'styled-components'

export const InfoElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-bottom: 1px solid ${props => props.darckMode ? '#fff' : '#83868f'};
  flex-wrap: wrap;
`
export const Span = styled.span`
color: #000;

`
export const Title = styled.h2`
color: #000;
margin: 0 20px;

`
export const H2 = styled.h1`
margin: 20px;
color: #000;
font-size: 3rem;

@media (max-width: 600px) {
    font-size: 2rem;
}

`
export const Imagen = styled.img`
width: 150px;
height: 150px;
`
export const DivOne = styled.div`
justify-content: space-between;
display: flex;
align-items: center;
width: 100%;
@media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
}
`
export const ContainerAll = styled.div`
justify-content: center;
display: flex;
align-items: center;
width: 100%;
flex-wrap: wrap;
`
export const DivTwo = styled.div`
display: flex;
flex-direction: column;
`
export const Des = styled.h5`
margin-bottom: 20px;
color: #000;
`
export const DivDes = styled.div`
width: 90%;
display: flex;
justify-content: center;
`
export const DivH1 = styled.div`
display: flex;
justify-content: center;
width: 100%;
`