import styled from "styled-components";
import Img from '../../assets/images.jpg'

export const DivContainer = styled.div`
background: ${props => props.darckMode ? '#202124' : '#fff'} ;

width: 100%;
min-height: 90vh;
display: flex;
flex-wrap: wrap;
`

export const DivNav = styled.div`
background-image: url(${Img});
background-repeat: no-repeat;
background-size: cover;
height: 100px;
width: 100%;
display: flex;
justify-content: center;
padding: 10px 0px;
`
export const DivComponent = styled.div`
width: 100%;
`
export const DivFoot = styled.div`
width: 100%;
`