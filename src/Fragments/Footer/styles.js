import styled from "styled-components";
import { Link } from "react-router-dom";

export const Img = styled.img`
color: green;
`

export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 15vh;
`
export const Li = styled.li`
    list-style: none;
`
export const A = styled.a`
    text-decoration: none;
    color: black;
    font-size: 1.5rem;

    :hover{
        border: 2px solid #cc9900;
        padding: 2vh 2vw;
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1.5rem;

    :hover{
        border: 2px solid #cc9900;
        padding: 2vh 2vw;
    }
`