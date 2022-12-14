import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7vh 0;
    @media screen and (max-width: 950px){
        padding: 4vh 0;
    }
`

export const Img = styled.img`
    border: 2px solid #cc9900;
    width: 50%;
    border-radius: 10%;
`
export const Name = styled.p`
    font-family: 'Merienda', cursive;
    font-size: .9rem;
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