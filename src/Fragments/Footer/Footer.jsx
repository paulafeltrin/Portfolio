import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <header>
            <h1>Aqui é a Footer</h1>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/paulafeltrin/"target="_blank">LinkedIn</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/paula.feltrin.923/"target="_blank">Facebook</a>
                </li>
                <li>
                    <Link to='aboutme'target="_blank"><li>Sobre mim</li></Link>
                </li>

            </ul>
        </header>  
    )
}
