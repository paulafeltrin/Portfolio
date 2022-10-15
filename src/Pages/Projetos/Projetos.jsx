import React from "react";
import * as S from "./styles"
import Adorno from "../../Assests/arabesco.png"
import Header from "../../Fragments/Header/Header"
import Footer from "../../Fragments/Footer/Footer";

export default function Projetos(){
    return(
        <S.BodyContact>
            <S.TitleContact>Meus projetos</S.TitleContact>
            <Header />
            <S.Div>
                <S.Ornament src={Adorno} alt="imagem linhas rebuscadas" />
                <S.Ornament src={Adorno} alt="imagem linhas rebuscadas" />
            </S.Div>
            <Footer />
        </S.BodyContact>
    )
}