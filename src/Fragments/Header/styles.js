import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
font-family: 'Great Vibes', cursive;
font-size: 7rem;
letter-spacing: 1.5rem;
font-weight: lighter;
text-align: center;
width: 100%;
padding: 15vh 0;
@media screen and (max-width:811px ) {
    font-size: 5.3rem;
    letter-spacing: 1.5rem;
}
@media screen and (max-width:670px ) {
    font-size: 3rem;
    letter-spacing: 1rem;
}
`

export const Row = styled.div`
border-top: 2px solid;
padding: 4vh 0;
width: 90%;
margin: 0 auto;
`

export const Ul = styled.ul`
display: flex;
justify-content: space-around;
`
export const StyledLink = styled(Link)`
text-decoration: none;
color: black;
font-size: 1.5rem;
`
export const Li = styled.li`
list-style: none;

:hover{
    border-top: 3px solid #cc9900;
    background-color: #cc990060;
    padding: 0 2vw;
}
`