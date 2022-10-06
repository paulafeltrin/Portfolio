import React, { useState } from "react";
import { StyledLink } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
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
                <StyledLink to='onu'><S.Li>Projeto ONU</S.Li></StyledLink>
                <StyledLink to='aboutme'><S.Li>Sobre mim</S.Li></StyledLink>
            </S.UlMobile>
        </div>
    )
}

    return(
        <header>
            <S.Title>Portfólio</S.Title>
                <S.UlWeb>
                    <StyledLink to='/contato'><S.Li>Contatos</S.Li></StyledLink>
                    <StyledLink to='/projetos'><S.Li>Projetos</S.Li></StyledLink>
                    <StyledLink to='onu'><S.Li>Projeto ONU</S.Li></StyledLink>
                    <StyledLink to='aboutme'><S.Li>Sobre mim</S.Li></StyledLink>
                </S.UlWeb>
                
                <S.BtnMobile onClick={() =>{handleList()}}>{status ? <AiOutlineClose/> : <AiOutlineMenu/> }</S.BtnMobile>
                {status &&  Lista()}
                <S.Row></S.Row>
        </header>
    )
}




// import React, {useState} from 'react'

// export default function App(){

//   const [status, setStatus] = useState(false)


//   function handleList(){
//     setStatus(!status)
//   }


//   const Lista = () =>{
//     return(
//       <div>
//       <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     <li>5</li>
//       </ul>
//     </div>
//     )
//   }


//   return(
//     <>
//     <button onClick={() =>{handleList()}}>{status ? '☂️' : '🌂' }</button>
//     {status &&  Lista()}
//     <p>Escrevendo alguma coisa</p>
//     </>
//   )
// }
