import styled, { keyframes } from 'styled-components'


const OpacityAnimation = keyframes`
 0% { opacity: 0}
 30% {   opacity: 0.3; }
 40% {  opacity: 0.6; }
 100% {  opacity: 1}
 `
export const AllConSuccess = styled.div`
background-color: black;
min-height: 80vh;
animation: ${OpacityAnimation} 0.5s ease-in ;
`
export const H2 = styled.h1`
color: #fff;
margin-bottom: 10px;
`
export const Span = styled.span`
color: #fff;
`

export const DivWords = styled.div`
min-height: 80vh;
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`

export const ConWord = styled.div`
@media (max-width: 600px) {
    margin: 0 20px;
}
`