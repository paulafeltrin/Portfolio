import styled from "styled-components";
import { Link } from "react-router-dom";

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
width: 100%;
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
export const LinkHome = styled(Link)`
display: none;
@media screen and (max-width:560px ) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Merienda', cursive;
    text-decoration: none;
    color: black;
    font-size: .9rem;
    padding: 1vh 0 1vh 0;
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
    width: 50%;
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
text-align: center;
list-style: none;
height: 4vh;
padding: 0 2vw;

:hover{
    border-top: 3px solid #cc9900;
    background-color: #cc990060;
}
`