import React from 'react';
import './home.css';


 //a <> vazia quer dizer que ta tudo dentro de um unico bloco
export default function Home(){
  return(
    <>
 
      <h1> Bem Vinde ao Site de Kaê! </h1>
      <br></br><br></br>
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/88dk2hyIwCM" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      </div>
  
      <footer> 
        <p> Chama liga que <br></br> eu sou sue amigue!</p>
      </footer>
    </>
);
}