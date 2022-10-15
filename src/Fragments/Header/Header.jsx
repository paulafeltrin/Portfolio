import React, { useState } from "react";
import { StyledLink } from "./styles";
import { LinkHome } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import * as S from "./styles"

export default function Header(){

const [status, setStatus] = useState(false)

function handleList(){
    setStatus(!status)
}

const Lista = () =>{
    return(
        <div>
            <S.UlMobile>
                <StyledLink to='/contato'><S.Li>Contatos</S.Li></StyledLink>
                <StyledLink to='/projetos'><S.Li>Projetos</S.Li></StyledLink>
                <StyledLink to='/about'><S.Li>Sobre mim</S.Li></StyledLink>
            </S.UlMobile>
        </div>
    )
}

    return(
        <header>
                <S.UlWeb>
                    <StyledLink to='/'><S.Li>Home</S.Li></StyledLink>
                    <StyledLink to='/contato'><S.Li>Contatos</S.Li></StyledLink>
                    <StyledLink to='/projetos'><S.Li>Projetos</S.Li></StyledLink>
                    <S.OnuWeb href="https://splendorous-banoffee-39a604.netlify.app/"target="_blank"><S.Li>Projeto Social</S.Li></S.OnuWeb>
                    <StyledLink to='/about'><S.Li>Sobre mim</S.Li></StyledLink>
                </S.UlWeb>
                <S.BtnMobile onClick={() =>{handleList()}}>{status ? <AiOutlineClose/> : <AiOutlineMenu/> }</S.BtnMobile>
                {status &&  Lista()}
                <LinkHome to='/'><S.Li><IoMdHome/>Home</S.Li></LinkHome>
                <S.OnuMob href="https://splendorous-banoffee-39a604.netlify.app/"target="_blank"><S.Li>Projeto Social</S.Li></S.OnuMob>
                <S.Row></S.Row>
        </header>
    )
}
