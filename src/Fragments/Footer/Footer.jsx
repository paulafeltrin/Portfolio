import React from "react";
import { AiFillFacebook } from "react-icons/ai"; 
import { AiFillLinkedin } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { HiOutlineUserCircle } from "react-icons/hi";
import { StyledLink } from "./styles";
import * as S from "./styles"

export default function Footer(){
    return(
        <footer>
            <S.Ul>  
                <S.Li>
                    <S.A href="https://www.linkedin.com/in/paulafeltrin/"target="_blank"><AiFillLinkedin/> LinkedIn</S.A>
                </S.Li>
                <S.Li>
                    <S.A href="https://www.facebook.com/paula.feltrin.923/"target="_blank"><AiFillFacebook/> Facebook</S.A>
                </S.Li>
                <S.Li>
                    <S.A href="https://github.com/paulafeltrin?tab=repositories"target="_blank"><GoMarkGithub/> GitHub</S.A>
                </S.Li>
                <S.Li>
                    <StyledLink to='aboutme'target="_blank"><HiOutlineUserCircle/>Sobre mim</StyledLink>
                </S.Li>
            </S.Ul>
        </footer>  
    )
}
