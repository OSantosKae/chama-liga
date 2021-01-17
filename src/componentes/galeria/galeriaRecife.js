import React from "react";
import './galeria.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import Recife1 from '../img/rec1.jpg';
import Recife2 from '../img/rec2.jpg';
import Recife3 from '../img/rec3.jpg';
import Recife4 from '../img/rec4.jpg';

export default function GaleriaRecife(){
return (
   <Carousel>
        <div>
            <img className="paisagem" alt="Recife" src={Recife1} />
            <p className="legend"> Fotos de Recife <br></br> Fotos:Kaê</p>
        </div>
        <div>
            <img className="paisagem2" alt="Recife" src={Recife2} />
            <p className="legend"> Fotos de Recife <br></br> Fotos:Kaê</p>
        </div>
        <div>
            <img className="paisagem2" alt="Recife" src={Recife3} />
            <p className="legend"> Fotos de Recife <br></br> Fotos:Kaê</p>
        </div>
        <div>
            <img className="paisagem2" alt="Recife" src={Recife4} />
            <p className="legend"> Fotos de Recife <br></br> Fotos:Kaê</p>
        </div>
    </Carousel>
 );  
}
