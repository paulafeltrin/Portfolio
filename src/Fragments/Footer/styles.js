import styled from "styled-components";

export const Ul = styled.ul`
display: flex;
justify-content: space-around;
width: 100%;
padding: 0 0 10vh 0;
align-self: auto;
@media screen and (max-width: 700px){
    flex-direction: column;
    align-items: flex-end;
    padding: 0 15vw 5vh 0;
}
`
export const Li = styled.li`
list-style: none;
@media screen and (max-width: 700px){
    padding: 1vh 0;
}
`
export const A = styled.a`
    font-family: 'Merienda', cursive;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    :hover{
        border: 2px solid #cc9900;
        padding: 1vh 2vw;
    }
`
