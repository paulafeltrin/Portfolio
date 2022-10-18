import React from "react";
import * as S from "./styles"
import Adorno from "../../Assests/arabesco.png"
import Header from "../../Fragments/Header/Header"
import Footer from "../../Fragments/Footer/Footer";

export default function About(){
    return(
        <S.BodyContact>
            <S.TitleContact>Sobre mim</S.TitleContact>
            <Header />
            <S.H2>Eu sou a Paula</S.H2>
            <S.P>Tenho 25 anos, brasileira e acadêmica de administração.</S.P>
            <S.P>Descobrir coisas noivas é o que me fascina e foi isso que senti quando decidi estudar desenvolvimeto web. É simplesmente um mundo a parte.</S.P>
            <S.P>Amante dos livros, dos animais e da natureza</S.P>
            <S.Div>
                <S.Ornament src={Adorno} alt="imagem linhas rebuscadas" />
                <S.Ornament src={Adorno} alt="imagem linhas rebuscadas" />
            </S.Div>
            <Footer />
        </S.BodyContact>
    )
}