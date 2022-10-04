import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
font-family: 'Libre Bodoni', serif;
font-size: 5rem;
letter-spacing: 1.7rem;
text-align: center;
width: 100%;
padding: 8vh 0;
@media screen and (max-width:811px ) {
    font-size: 3.3rem;
    letter-spacing: 1.5rem;
}
@media screen and (max-width:670px ) {
    font-size: 2rem;
    letter-spacing: 1rem;
}
`
export const Row = styled.div`
border-top: 2px solid;
padding: 4vh 0;
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
    background-color: lightgray;
    padding: 0 2vw;
    border-radius: 15% 15% 0 0;
}
`