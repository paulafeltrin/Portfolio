import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
font-family: 'Merienda', cursive;
font-size: 5.5rem;
letter-spacing: 1.5rem;
font-weight: lighter;
text-align: center;
width: 100%;
padding: 5vh 0 2.5vh 0;
@media screen and (max-width:811px ) {
    font-size: 5.3rem;
    letter-spacing: 1.5rem;
}
@media screen and (max-width:670px ) {
    font-size: 3rem;
    letter-spacing: 1rem;
}
@media screen and (max-width:560px ) {
    font-size: 2rem;
    letter-spacing: .5rem;
}
@media screen and (max-width:560px ) {
    font-size: 1.7rem;
}
`
export const H2 = styled.h2`
font-family: 'Merienda', cursive;
font-size: 2rem;
letter-spacing: .3rem;
font-weight: lighter;
text-align: center;
width: 100%;
padding: 5vh 0 10vh 0;
@media screen and (max-width:811px ) {
    font-size: 1.7rem;
}
@media screen and (max-width:670px ) {
    font-size: 1.3rem;
}
@media screen and (max-width:560px ) {
    font-size: 1rem;
}
`
export const Row = styled.div`
border-top: 2px solid;
padding: 2vh 0;
width: 90%;
margin: 0 auto;
@media screen and (max-width:560px ) {
    padding: 2vh 0;
    border-top: 0 solid;
    border-bottom: 2px solid;
}
`

export const UlWeb = styled.ul`
display: flex;
justify-content: space-around;
@media screen and (max-width:560px ) {
    display: none;
}
`
export const BtnMobile = styled.button`
display: none;
@media screen and (max-width:560px ) {
    width: 8vw;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 1vh 0;
    background-color: #cc990060;
    border: none;
    border-radius: 20%;

    :hover{
        background-color: #cc9900;
    }
}
`
export const UlMobile = styled.ul`
border: 2px solid #cc990050;
width: 30vw;
border-radius: 10%;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
padding: 1vh 0 0 1vw;
@media screen and (max-width: 383px ) {
    width: 50vw;
}
`
export const StyledLink = styled(Link)`
font-family: 'Merienda', cursive;
text-decoration: none;
color: black;
font-size: .9rem;
@media screen and (max-width: 455px ) {
    font-size: .7rem;
}
`
export const Li = styled.li`
list-style: none;

:hover{
    border-top: 3px solid #cc9900;
    background-color: #cc990060;
    padding: 0 2vw;
}
`