import styled from 'styled-components'

export const Input = styled.input`
background-color: #fff;
 background-image: none;
 border-radius: 4px;
 border: 1px solid #d9d9d9;
 color: rgba(0,0,0,0.75);
 display: inline-block;
 font-feature-settings: "tnum";
 font-size: 14px;
 height: 32px;
 line-height: 32px;
 list-style: none;
 margin: 0 0 15px 0;
 outline: 0;
 padding: 4px 12px;
 width: 60%;
 box-sizing: border-box;
 @media (max-width: 800px) {
 width: 80%;
}
`
export const ConButton = styled.div`
display: flex;
justify-content: space-around;
width: 80%;
margin-top: 30px;
margin-bottom: 40px;
@media (max-width: 500px) {
 width: 80%;
}
`
export const Button = styled.button`
  background: linear-gradient(to bottom,#bdc541 5%,#a9c949 100%);
  background-color: #63b8ee;
  border-radius: 6px;
  border: 1px solid #3866a3;
  display: inline-block;
  cursor: pointer;
  color: #000;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-decoration-line: none;
  text-shadow: 0px 1px 0px #7cacde;
  outline: none;
  width: 200px;
  &:hover{
    background: linear-gradient(to bottom,#64cd84 5%,#429d49 100%);
    background-color: #04f700;
    }
`

export const ButtonRegister = styled.button`
color: #000;
font-size: 12px;
cursor: pointer;
`
export const Form = styled.form`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;

`
export const ContainerH2 = styled.div`
justify-content: center;
display: flex;
width: 100%;
`
export const H2 = styled.h2`
margin-bottom: 30px;
color: ${props => props.darckMode ? '#fff' : '#000'}; 
font-size: 3rem;
@media (max-width: 500px) {
font-size: 2rem;
margin-top: 20px;
 
}
`
export const P = styled.p`
color: red;
font-size: 14px;
`
export const Image = styled.img`
width: 200px;
height: 200px;
@media (max-width: 500px) {
  width: 150px;
height: 150px;
}
`
export const ContainerRegister = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 50px;
@media (max-width: 500px) {
  flex-wrap: wrap;
  padding: 40px;
}
`