import React from "react";
import Imagem from "../../Assests/img-Paula.jpeg"
import Adorno from "../../Assests/arabesco.png"
import * as S from "./styles"

export default function Main(){
    return(
        <S.Main>
            <S.Div>
                <S.Ornament src={Adorno} alt="imagem linhas rebuscadas" />
                <S.Ornament src={Adorno} alt="imagem linhas rebuscadas" />
            </S.Div>
            <S.Img src={Imagem} alt="Paula Cassia Feltrin" />
            <S.Name>Paula Cassia Feltrin</S.Name>
            <S.Div>
                <S.Ornament src={Adorno} alt="imagem linhas rebuscadas" />
                <S.Ornament src={Adorno} alt="imagem linhas rebuscadas" />
            </S.Div>
        </S.Main>
        
    )
}