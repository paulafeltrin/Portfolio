import React from "react";
import * as S from "./styles"
import Crespos from "../../Assests/works/crespos.png"
import DogPage from "../../Assests/works/dog_page.png"
import Estados from "../../Assests/works/estados-brasileiros.png"
import HP from "../../Assests/works/harry-potter.png"
import ListaTodo from "../../Assests/works/lista-to_do.png"
import Localizador from "../../Assests/works/localizador-cep.png"
import Login from "../../Assests/works/login_game.png"
import Portflow from "../../Assests/works/portflow.png"
import Recipes from "../../Assests/works/recipes.png"

import Adorno from "../../Assests/arabesco.png"
import Header from "../../Fragments/Header/Header"
import Footer from "../../Fragments/Footer/Footer";

export default function Projetos(){
    return(
        <S.BodyProjects>
            <S.TitleProjects>Meus projetos</S.TitleProjects>
            <Header />
            <section>
                <S.Project>
                    <S.Figure>
                        <a href="https://paulafeltrin.github.io/desafio-crespos/"target="_blank">
                            <S.Challenge src={Crespos} alt="Projeto Crespos" />
                        </a>
                    </S.Figure>
                    <S.DivProject>
                        <S.H2> Projeto Crespos</S.H2>
                        <S.P>Site desenvolvido em html e css, totalmente responsivo.</S.P>
                        <S.Technology>
                            <S.TagHtml>
                                <S.A href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"target="_blank">HTML</S.A>    
                            </S.TagHtml>
                            <S.TagCss>
                                <S.A href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"target="_blank">CSS</S.A>
                            </S.TagCss>
                        </S.Technology>
                    </S.DivProject>
                </S.Project>
                <S.Project>
                    <S.Figure>
                        <a href="https://comfy-mousse-ec5f69.netlify.app/"target="_blank">
                            <S.Challenge src={DogPage} alt="Projeto Dog Page" />
                        </a>
                    </S.Figure>
                    <S.DivProject>
                        <S.H2>Projeto Dog Page</S.H2>
                        <S.P>Site desenvolvido para consumo de API.</S.P>
                        <S.Technology>
                            <S.TagReact>
                                <S.A href="https://reactjs.org/docs/getting-started.html"target="_blank">ReactJS</S.A>
                            </S.TagReact>
                            <S.TagStyled>
                                <S.A href="https://styled-components.com/"target="_blank">Styled Components</S.A>
                            </S.TagStyled>
                            <S.TagApi>
                                <S.A href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"target="_blank">API</S.A>
                            </S.TagApi>
                        </S.Technology>
                    </S.DivProject>
                </S.Project>
                <S.Project>
                    <S.Figure>
                        <a href="https://neon-maamoul-ac308f.netlify.app/"target="_blank">
                            <S.Challenge src={Estados} alt="Filter sem botão" />
                        </a>
                    </S.Figure>
                    <S.DivProject>
                        <S.H2>Filtro - estados brasileiros</S.H2>
                        <S.P>Uso do filter sem botão para filtrar os estados bradileiros.</S.P>
                        <S.Technology>
                            <S.TagReact>
                                <S.A href="https://reactjs.org/docs/getting-started.html"target="_blank">ReactJS</S.A>
                            </S.TagReact>
                            <S.TagStyled>
                                <S.A href="https://styled-components.com/"target="_blank">Styled Components</S.A>
                            </S.TagStyled>
                        </S.Technology>
                    </S.DivProject>
                </S.Project>
                <S.Project>
                    <S.Figure>
                        <a href="https://radiant-madeleine-d9b821.netlify.app/"target="_blank">
                            <S.Challenge src={HP} alt="Projeto Harry Potter" />
                        </a>
                    </S.Figure>
                    <S.DivProject>
                        <S.H2>Projeto Harry Potter</S.H2>
                        <S.P>Site desenvolvido para consumo de API.</S.P>
                        <S.Technology>
                            <S.TagReact>
                                <S.A href="https://reactjs.org/docs/getting-started.html">ReactJS</S.A>
                            </S.TagReact>
                            <S.TagStyled>
                                <S.A href="https://styled-components.com/">Styled Components</S.A>
                            </S.TagStyled>
                            <S.TagApi>
                                <S.A href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">API</S.A>
                            </S.TagApi>
                        </S.Technology>
                    </S.DivProject>
                </S.Project>
                <S.Project>
                    <S.Figure>
                        <a href="https://dazzling-bonbon-0354dc.netlify.app/"target="_blank">
                            <S.Challenge src={ListaTodo} alt="Lista de tarefas" />
                        </a>
                    </S.Figure>
                    <S.DivProject>
                        <S.H2>Lista de Tarefas</S.H2>
                        <S.P>Site desenvolvido para simular uma lista de tarefas e suas principais funcionalidades.</S.P>
                        <S.Technology>
                            <S.TagReact>
                                <S.A href="https://reactjs.org/docs/getting-started.html"target="_blank">ReactJS</S.A>
                            </S.TagReact>
                            <S.TagStyled>
                                <S.A href="https://styled-components.com/"target="_blank">Styled Components</S.A>
                            </S.TagStyled>
                        </S.Technology>
                    </S.DivProject>
                </S.Project>
                <S.Project>
                    <S.Figure>
                        <a href="https://celadon-dolphin-7de65c.netlify.app/"target="_blank">
                            <S.Challenge src={Localizador} alt="Localizador de endereços" />
                        </a>
                    </S.Figure>
                    <S.DivProject>
                        <S.H2>Localizador de endereços</S.H2>
                        <S.P>Buscador de endereço por meio de CEP.</S.P>
                        <S.Technology>
                            <S.TagReact>
                                <S.A href="https://reactjs.org/docs/getting-started.html"target="_blank">ReactJS</S.A>
                            </S.TagReact>
                            <S.TagStyled>
                                <S.A href="https://styled-components.com/"target="_blank">Styled Components</S.A>
                            </S.TagStyled>
                            <S.TagApi>
                                <S.A href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"target="_blank">API</S.A>
                            </S.TagApi>
                        </S.Technology>
                    </S.DivProject>
                </S.Project>
                <S.Project>
                    <S.Figure>
                        <S.A href="https://paulafeltrin.github.io/desafio07-js/"target="_blank">
                            <S.Challenge src={Login} alt="Login Game" />
                        </S.A>
                    </S.Figure>
                    <S.DivProject>
                        <S.H2>Login Game</S.H2>
                        <S.P>Site desenvolvido em html, css e JavaScript, totalmente responsivo.</S.P>
                        <S.Technology>
                            <S.TagHtml>
                                <S.A href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"target="_blank">HTML</S.A>    
                            </S.TagHtml>
                            <S.TagCss>
                                <S.A href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"target="_blank">CSS</S.A>
                            </S.TagCss>
                            <S.TagJs>
                                <S.A href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"target="_blank">JavaScript</S.A>
                            </S.TagJs>
                        </S.Technology>
                    </S.DivProject>
                </S.Project>
                <S.Project>
                    <S.Figure>
                        <a href="https://paulafeltrin.github.io/portflow/"target="_blank">
                            <S.Challenge src={Portflow} alt="Projeto Portflow" />
                        </a>
                    </S.Figure>
                    <S.DivProject>
                        <S.H2>Projeto Portflow</S.H2>
                        <S.P>Site desenvolvido em html e css, totalmente responsivo.</S.P>
                        <S.Technology>
                            <S.TagHtml>
                                <S.A href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"target="_blank">HTML</S.A>    
                            </S.TagHtml>
                            <S.TagCss>
                                <S.A href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"target="_blank">CSS</S.A>
                            </S.TagCss>
                        </S.Technology>
                    </S.DivProject>
                </S.Project>
                <S.Project>
                    <S.Figure>
                        <a href="https://majestic-lolly-055776.netlify.app/"target="_blank">
                            <S.Challenge src={Recipes} alt="Projeto de receitas" />
                        </a>
                    </S.Figure>
                    <S.DivProject>
                        <S.H2>Projeto Recipes</S.H2>
                        <S.P>Site desenvolvido em dupla utilizndo ReactJS, totalmente responsivo.</S.P>
                        <S.Technology>
                            <S.TagReact>
                                <S.A href="https://reactjs.org/docs/getting-started.html"target="_blank">ReactJS</S.A>
                            </S.TagReact>
                            <S.TagStyled>
                                <S.A href="https://styled-components.com/"target="_blank">Styled Components</S.A>
                            </S.TagStyled>
                        </S.Technology>
                    </S.DivProject>
                </S.Project>
            </section>
            <S.Div>
                <S.Ornament src={Adorno} alt="imagem linhas rebuscadas" />
                <S.Ornament src={Adorno} alt="imagem linhas rebuscadas" />
            </S.Div>
            <Footer />
        </S.BodyProjects >
    )
}