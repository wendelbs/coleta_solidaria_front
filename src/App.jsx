import React from "react";
import { Routes,
          Route, 
          BrowserRouter,
        } from "react-router-dom";

import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Cadastro from "./pages/cadastro";
import Instituicoes from "./pages/instituicoes";
import Produtos from "./pages/produtos";
import Login from "./pages/login";



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instituicoes" element={<Instituicoes />} />
        <Route path="/produtos" element={<Produtos />} />
    </Routes>
  </BrowserRouter>
  )
}

