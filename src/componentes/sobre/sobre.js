import React from "react";
import "./sobre.css";
import { Link } from "react-router-dom";
import Kae from '../img/kae.jpg';


export default function Sobre(){
  return (
    <>

      <aside>
          <img id="kae" alt="Kae" src={Kae}/>
          <h3 id="chama"> Quem é Kaê? </h3> 
          <div><p>...</p></div>
        <br></br>
          
      </aside>
      <br></br>
      <table className="sobre" width="900px" border="1">
      <div>
     <b> <p id="esquerda" > Graduade em Cinema e Audiovisual 
            das Faculdades Integradas Barros Melo. 
            Licenciande em  <br></br> 
            Expressão Gráfica. Tem 
            experiência em produções acadêmicas, 
            executando diversas <br></br> 
            funções do 
            audiovisual, como diretore de produção,
            técnique som direto, roteirista, <br></br>  
            diretore de fotografia, montadore, 
            animadore, artista de storyboard, 
            diretore, assistente <br></br> 
            de direção e continuísta.
            </p>  
            <br></br>  <br></br> 

        <p id="direita">Em 2017, foi convidade a realizar um trabalho fotográfico, por participar do grupos de  <br></br> 
        estudos Arte: Loucura, fantasma e feminismo, que compôs o acervo da exposição Um lugar  <br></br> 
        dentro dele de Milena Travassos.
        </p>
        <br></br>  <br></br>  
        
        <p className="justificado"> Em 2019, teve o curta Pisciano, de Alexandre Pitanga, exibido no CinePe, o que foi diretore  <br></br> 
        de fotografia. Uma de suas maiores conquistas foi conseguir levar a mãe para assistir a exibição  <br></br> 
        do curta. 
        </p>
        </b>
        </div>
        </table>
    </>

  );
}