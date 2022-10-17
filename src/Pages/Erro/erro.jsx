import { StyledLink } from './style'
import * as S from './style'

export default function Erro(){
    return(
        <S.Div>
            <S.H2>Erro!</S.H2>
            <S.P>Você acabou de entrar em universo paralelo!</S.P>
            <StyledLink to='/'>Clique Aqui</StyledLink>
            <S.P>para voltar ao site</S.P>
        </S.Div>
    )
}