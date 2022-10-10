import styled from "styled-components";

export const Ul = styled.ul`
padding: 1vh 0 15vh 0;
display: flex;
justify-content: space-around;
`
export const A = styled.a`
    width: 20%;
    height: 8vh;
    font-family: 'Merienda', cursive;
    text-decoration: none;
    text-align: center;
    color: black;
    font-size: 1rem;
    @media screen and (max-width:811px ) {
        font-size: .7rem;
    }
    :hover{
        border: 2px solid #cc9900;
    }
`
export const Li = styled.li`
list-style: none;
`
