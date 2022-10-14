import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../Home/Home"
import Contato from "../Pages/Contact/Contact"
import Projetos from "../Pages/Projetos/Projetos"
// import ONU from "../Pages/ProjetoOnu/ProjetoOnu"
import AboutMe from "../Pages/AboutMe/About"

export default function Rotas(){
  return(
    <Router>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/projetos" element={<Projetos/>}/>
            {/* <Route path="/onu" element={<ONU/>}/> */}
            <Route path="/aboutme" element={<AboutMe/>}/>
           </Routes>
    </Router>
  )
}