import React from "react";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai"; 
import { GoMarkGithub } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import * as S from "./styles"

export default function Footer(){
    return(
        <footer>
            <S.Ul>
                <S.A href="https://www.linkedin.com/in/paulafeltrin/"target="_blank"rel="noreferrer"><AiFillLinkedin/> 
                    <S.Li>LinkedIn</S.Li>
                </S.A>
                <S.A href="https://github.com/paulafeltrin?tab=repositories"target="_blank"rel="noreferrer"><GoMarkGithub/> 
                    <S.Li>GitHub</S.Li>
                </S.A>
                <S.A href="https://api.whatsapp.com/send?phone=5546999079214&text=Bem-vindo(a)!"target="_blank"rel="noreferrer"><IoLogoWhatsapp/>
                    <S.Li>WhatsApp</S.Li>
                </S.A>
                <S.A href="https://www.facebook.com/paula.feltrin.923/"target="_blank"rel="noreferrer"><AiFillFacebook/>
                    <S.Li>Facebook</S.Li>
                </S.A>
            </S.Ul>
        </footer>  
    )
}
