import React from "react";
import "./contatinho.css";


export default function Contatinho(){
  return(
    <>
    <h1>Por onde tu me acha:</h1>
    <table className="contato" width="500px" border="1">
      <div><b>
       
        <p className="p"> Linkedin:  <a href='https://www.linkedin.com/in/kaê-de-oliveira-a93407154' > Kaê de Oliveira </a></p>
        <br></br><br></br>
        <p className="p"> Insta:  <a href='https://www.instagram.com/luaemaries.mkv/'>@luaemaries</a></p>
        <br></br><br></br>
        <p className="p">E-mail:  <a>osantoskae@gmail.com </a></p> 
        <br></br><br></br>
        </b></div>
      </table>
      <footer>
      <h5> Dale a tua ideia pero audio.</h5>
      </footer>
    </>
  );
}