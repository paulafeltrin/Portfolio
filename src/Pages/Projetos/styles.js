import styled from "styled-components";
import Img from '../../Assests/old-paper.png'

export const BodyProjects = styled.section`
    margin: 0 auto;
    max-width: 1080px;
    width: 100%;
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
export const TitleProjects = styled.h1`
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
export const Project = styled.div`
display: flex;
max-width: 1000px;
padding: 1vh 0;
margin: auto;
@media screen and (max-width:900px ) {
    flex-direction: column-reverse;
    padding: 0 2vw;
}
:hover{
    outline: 2px solid #cc9900;
}
`
export const Figure = styled.figure`
    width: 70%;
    margin: 0 auto;
`
export const Challenge = styled.img`
    max-width: 100%;
    :hover{
        transform: scale(1.1);
        border-radius: 2%;
    }
`
export const DivProject = styled.div`
width: 45vw;
text-align: center;
display: flex;
flex-direction: column;
margin: 3vh 2vw;

@media screen and (max-width:900px ) {
    width: 100vw;
}
`
export const H2 = styled.h2`
    font-family: 'Merienda', cursive;
    padding: 1vh 0;
`
export const P = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: justify;
    margin: 5vh 2vw;
`
export const Technology = styled.div`
width: 70%;
margin: auto;
display: flex;
justify-content: space-evenly;
`
export const A = styled.a`
    color: black;
    text-decoration: none;
`
export const TagHtml = styled.p`
background-color: #D84924;
padding: .5vh .5vw;
border-radius: 8%;
`
export const TagCss = styled.p`
background-color: #2449D8;
padding: .5vh .5vw;
border-radius: 8%;
`
export const TagJs = styled.p`
background-color: #E9D204;
padding: .5vh .5vw;
border-radius: 8%;
`
export const TagReact = styled.p`
background-color: #5CCFEE;
padding: .5vh .5vw;
border-radius: 8%;
`
export const TagStyled = styled.p`
background-color: #E38B6B;
padding: .5vh .5vw;
border-radius: 8%;
`
export const TagApi = styled.p`
background-color: #EA5427;
padding: .5vh .5vw;
border-radius: 8%;
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
