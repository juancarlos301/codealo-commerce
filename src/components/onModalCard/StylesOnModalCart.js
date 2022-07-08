import styled from 'styled-components'


export const Container = styled.div`
background-color: ${props => props.darckMode ? '#fff' : '#000'};
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(2, 1fr);
width: 80%;
height: 80%;
gap: 20px;
border-radius: 20px;
@media (max-width: 800px) {
grid-template-columns: repeat(12, 1fr);
grid-template-rows: repeat(2, 1fr);
width: 100%;
height: 100vh;
max-height: 100vh;
gap: 4px;
}
`
export const ContainerImag = styled.div`
grid-column: 1/2; 
grid-row-start: span 2;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 800px) {
    grid-column: 1 / span 12; 
    grid-row: 1/ span 1;
}
`
export const Image = styled.img`
width: 200px;
height: 200px;
@media (min-width: 800px) {
    width: 300px;
    height: 300px;
}
@media (min-width: 1000px) {
    width: 380px;
    height: 380px;
}
`
export const ContainerContent = styled.div`
grid-column: 2/6; 
grid-row-start: span 2;
display: flex;
justify-content: center;
flex-wrap: wrap;
flex-direction: column;
@media (max-width: 800px) {
    grid-column: 1 / span 12; 
    grid-row-start: 2;
    padding: 8px;
}
`
export const ContainerButton = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
@media (max-width: 800px) {
    justify-content: flex-end;
    margin-right: 20px;
}
`
export const ContainerText = styled.div`
display: flex;
justify-content: center;
`

export const H1 = styled.h1`
font-size: 3rem;
margin-bottom: 20px;
font-weight: 300;
color: ${props => props.darckMode ? '#000' : '#fff'};
@media (max-width: 800px) {
font-size: 2rem;
margin-bottom: 10px;
    
}
`
export const H2 = styled.h2`
font-weight: 700;
margin-bottom: 15px;
color: ${props => props.darckMode ? '#000' : '#fff'};
@media (max-width: 800px) {
font-size: 1.5rem;
margin-bottom: 10px;
    
}
`
export const Text = styled.p`
font-size: 1.25rem;
margin-bottom: 10px;
font-weight: 300;
padding: 10px;
color: ${props => props.darckMode ? '#000' : '#fff'};
@media (max-width: 800px) {
font-size: 1.1rem;
margin-bottom: 5px;
padding: 5px;
margin-left: 10px;
}
`
export const Button = styled.button`
border-radius: 0.25rem;
border: 1px solid transparent;
font-size: 1.5rem;
color: ${props => props.darckMode ? '#000' : '#fff'};
border-color: ${props => props.darckMode ? '#000' : '#fff'};
margin: 0 10px 0 0;
padding: 5px;
cursor: pointer;
&:hover {
    background-color: ${props => props.off ? '#d34545' : '#625d5d'} ;
}
@media (max-width: 800px) {
font-size: 1.2rem;


}
`