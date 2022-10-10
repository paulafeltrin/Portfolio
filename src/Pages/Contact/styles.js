import styled from "styled-components";
import Img from '../../Assests/old-paper.png'

export const BodyContact = styled.section`
    margin: 0 auto;
    max-width: 1080px;
    width: 100%;
    height: 100vh;
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const TitleContact = styled.h1`
font-family: 'Merienda', cursive;
font-size: 5rem;
letter-spacing: 1.3rem;
font-weight: lighter;
text-align: center;
width: 100%;
padding: 0 5vw;
@media screen and (max-width:940px ) {
    font-size: 4.5rem;
    letter-spacing: 1rem;
}
@media screen and (max-width:840px ) {
    font-size: 4rem;
    letter-spacing: 1rem;
}
@media screen and (max-width:453px ) {
    font-size: 3rem;
    letter-spacing: .5rem;
}
`
export const Div = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const Ornament = styled.img`
    padding: 5vh 0;
    width: 40%;
`