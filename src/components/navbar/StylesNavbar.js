import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const NavbarCon = styled.nav`
width: 100%;
padding: 0px 40px;
`

export const Linke = styled(Link)`
text-decoration: none;
font-size: 2rem;
color: #fff;
text-shadow: 4px 3px 4px #bfbfbfd9;
font-family: Georgia, 'Times New Roman', Times, serif;
&:hover{
    border-bottom: 2px solid #fff;
    transition: .5s;
}
@media (max-width: 800px) {
font-size: 1.5rem;
margin-bottom: 10px;
}
@media (min-width: 1000px) {
font-size: 2.5rem;
}
`

export const Anchor = styled.a`
text-decoration: none;
font-size: 2rem;
color: #fff;
text-shadow: 4px 3px 4px #bfbfbfd9;
font-family: Georgia, 'Times New Roman', Times, serif;
&:hover{
    border-bottom: 2px solid #fff;
    transition: .5s;
}
@media (max-width: 800px) {
font-size: 1.5rem;
margin-bottom: 10px;
}
@media (min-width: 1000px) {
font-size: 2.5rem;
}
`
export const Input = styled.input`
border-radius: 5px;
font-size: large;
background-color: #ffff;
border-width: thin;
border-color: black;
height: 25px;
margin-left: 5px;
@media (max-width: 800px) {
    width: 180px;
    
}
`
export const Divinput = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
@media (max-width: 800px) {
    margin-top: 20px;
}
&:hover{
    transform: scale(1.07);
}
`
export const DivDropDown = styled.div`
position: relative;
`
export const ButtonDrop = styled.div`
font-size: 2.5rem;
color: #fff;
text-shadow: 4px 3px 4px #bfbfbfd9;
font-family: Georgia, 'Times New Roman', Times, serif;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 800px) {
    font-size: 1.5rem;
    margin-left: 15px;
}
`
export const Ul = styled.ul`
list-style: none;
font-size: 1.4rem;
position: absolute;
background-color: #000;
padding: 0;
width: 120%;
text-shadow: none;
border-radius: 10px;
opacity: ${props => props.visible ? 1 : 0};
display: ${props => props.visible ? "block" : "none"};
transition: all 0.3s;
@media (max-width: 800px) {
    width: 240px;
    background-color: #202020;
}
`
export const Li = styled.li`
margin: 10px 20px;
width: 100%;
cursor: pointer;

&:hover {
    color: #fff;
}
`

export const LinkToCat = styled(Link)`
text-decoration: none;
color: #b9b6b6;

`
export const ContainerBars = styled.div`
    position: absolute;
    margin-top: 4px;
    margin-bottom: 8px;
    background-color: transparent;
    background-image: none;
    border: 1px solid rgba(255, 255, 255, 0.308);
    border-radius: 4px;
    display: block;
    top:0;
    left: 5px;
    cursor: pointer;
    @media (min-width: 800px) {
    display: none;
    position: relative;
    }
`
export const ButtonBar = styled.button`
text-decoration: none;
color: #b9b6b6;
cursor: pointer;
`
export const SpanBar = styled.span`
 display: block;
    width: 22px;
    height: 2px;
    margin: 5px 0px;
    border-radius: 1px;
    background-color: #fff;
`
export const ContainerAll = styled.div`
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 800px) {
        background-color: ${props => props.open && "black"};
        flex-direction: column;
        height: 100vh;
        position: absolute;
        transition: 0.4s all ease-in;
        width: 80%;
        left: ${props => props.open ? "0" : "-500px"};
        top: 0;
        padding: 40px 20px;
        justify-content: flex-start;
}

`