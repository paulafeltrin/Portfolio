import React from "react";
import * as S from "../Home/styles"
import Header from "../Fragments/Header/Header"
import Main from "../Fragments/Main/Main"
import Footer from "../Fragments/Footer/Footer"

export default function Home(){
    return(
        <>
            <S.BodyHome>
                <S.Title>Portfólio</S.Title>
                <S.H2>Desenvolvimento web</S.H2>
                <Header />
                <Main />
                <Footer />
            </S.BodyHome>
        </>

    )
}