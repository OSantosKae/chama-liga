import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

export default function Menu(){
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/">Página principal</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contatinho">Contatinho</Link>
      <Link to="/portfolio">Portfólio</Link>
    </nav>
  );
}
{/*<Link to="/galeriarecife">Galeria Recife</Link>
      <Link to="/galeriatubarao">Galeria Tubarão</Link>
      <Link to="/filmes"> Filmes </Link> */}