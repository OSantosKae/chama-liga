import React from 'react';
import './portfolio.css';
import Tuba1 from '../img/tuba1.JPG';
import Recife2 from '../img/rec2.jpg';
import Pisciano from '../img/pisciano.jpg'
import Ponte from '../img/ponte.png'

export default function Portfolio(){
  return(
    <>
    <div className="div">
    <h1> Top 4 trabalhos de Kaê </h1>
    <br></br><br></br><br></br>
        <a href="https://www.miradajanela.com/2019/01/as-coisas-boas-enferrujam-aos-poucos.html"><img className="miniatura" alt="Fotos e poema de Kaê" src={Ponte} />
        </a>
        <h3> As coisas boas enferrujam aos poucos <br></br>
        Fotos e poema de: Kaê </h3>
            <br></br><br></br>
    </div>

    <div className="div2">
    <br></br><br></br><br></br>
        <a href="galeriaRecife"><img className="miniatura" alt="Recife" src={Recife2} />
        </a>
        <h3> Recife <br></br>
            Fotos: Kaê </h3>
            <br></br><br></br>
    </div> 

    <div className="div3">
       
        <br></br><br></br><br></br>
        <a href="galeriaTubarao"><img className="tuba" alt="Performance Tubarão" src={Tuba1} />
        </a>
        <h3>Tubarão, performance
        <br></br> Fotos: Kaê
        </h3>
        <br></br><br></br>
    </div>
    
    <div className="div4">
    <br></br><br></br><br></br>
        <a href="filmes"><img className="tuba" alt="Pisciano" src={Pisciano} />
        </a>
        <h3> Pisciano <br></br></h3>
            <h4>Dir.:Alexandre Pitanga <br></br>
            Dir. de Fotografia: Kaê</h4> 
            <br></br><br></br>
    </div> 

    </>

  );
}