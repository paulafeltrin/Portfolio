import Img from '../Assests/old-paper.png'
import styled from 'styled-components'

export const BodyHome = styled.section`
    margin: 0 auto;
    max-width: 1080px;
    width: 100%;
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`
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