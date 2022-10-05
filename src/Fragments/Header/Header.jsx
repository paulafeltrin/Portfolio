import React from "react";
import { StyledLink } from "./styles";
import * as S from "./styles"

export default function Header(){
    return(
        <header>
            <S.Title>Portfólio</S.Title>
                <S.Ul>
                    <StyledLink to='/contato'><S.Li>Contatos</S.Li></StyledLink>
                    <StyledLink to='/projetos'><S.Li>Projetos</S.Li></StyledLink>
                    <StyledLink to='onu'><S.Li>Projeto ONU</S.Li></StyledLink>
                    <StyledLink to='aboutme'><S.Li>Sobre mim</S.Li></StyledLink>
                </S.Ul>
                <S.Row></S.Row>
        </header>
    )
}