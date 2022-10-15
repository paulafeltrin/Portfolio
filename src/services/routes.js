import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import Contato from "../Pages/Contact/Contact"
import Projetos from "../Pages/Projetos/Projetos"
import About from "../Pages/AboutMe/About"

export default function Rotas(){
  return(
    <Router>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/projetos" element={<Projetos/>}/>
            <Route path="/about" element={<About/>}/>
           </Routes>
    </Router>
  )
}