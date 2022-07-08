import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const DivEmoti = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 50%;
min-width: 70px;
`
export const H4 = styled.h4`
color: black;
margin-left: 10px;
`
export const Linked = styled(Link)`
text-decoration: none;
font-size: 2rem;
color: black;
`