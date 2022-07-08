import styled from 'styled-components'
import Img from '../assets/images.jpg'

export const DivContainerWel = styled.div`
min-height: 94vh;
background-image: url(${Img});
background-repeat: no-repeat;
background-size: cover;
padding: 20px;
`
export const DivContainerContent = styled.div`
display: flex;
justify-content: center;
`

export const DivHome = styled.div`
background: ${props => props.darckMode ? '#202124' : '#ebebeb'} ;
display: grid;
grid-template-columns: repeat(6, 1fr);
width: 100%;
height: 100%;
padding-bottom: 40px;
transition: all .5s ease;
@media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

`
export const DivButton = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 60vh;

`
export const Button = styled.button`
padding: 4px;
font-size: 1.2rem;
border: none;
border-radius: 4px;
cursor: pointer;
background-color: ${props => props.darckMode ? '#fff' : '#202124'} ;
transition: all .3s ease;
margin:20px ;
color: ${props => props.darckMode ? '#202124' : '#fff'}; 
&:hover {
    transform: scale(1.2);
}
`
export const DivAllList = styled.div`
grid-row-start: 2;
grid-column-start: span 6;
margin: 0 10px;
@media (max-width: 640px) {
    grid-column-start: span 2;
  }
`
export const DivList = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
width: 100%;
height: 100%;
gap: inherit;
padding: 0 10px;
@media (max-width: 640px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
  }
`
export const H1 = styled.h1`
font-size: 3rem;
text-shadow: 3px 5px 5px #464343;
margin: 15px 20px 5px;
font-family: Georgia, 'Times New Roman', Times, serif;
color: ${props => props.darckMode ? "white" : "black"};
`
export const DivTitle = styled.div`
display: flex;
justify-content: space-between;
grid-column-start: span 6;
margin: 0 10px;
@media (max-width: 640px) {
    grid-column-start: span 2;
  }
`
