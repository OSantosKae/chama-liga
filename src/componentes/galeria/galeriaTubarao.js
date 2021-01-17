import React from "react";
import './galeria.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import Tuba1 from '../img/tuba1.JPG';
import Tuba2 from '../img/tuba2.JPG';
import Tuba3 from '../img/tuba3.jpg';
import Tuba4 from '../img/tuba4.JPG';
import Tuba5 from '../img/tuba5.JPG';
import Tuba6 from '../img/tuba6.JPG';
import Tuba7 from '../img/tuba7.JPG';
import Tuba8 from '../img/tuba8.JPG';
import Tuba9 from '../img/tuba9.JPG';


export default function GaleriaTubarao(){
return (
    <Carousel>
        <div>
            <img className="paisagem1" alt="Performance Tubarão" src={Tuba1} />
            <p className="legend"> Performance Tubarão <br></br> Fotos:Kaê</p>
        </div>
        <div>
            <img className="paisagem1" alt="Performance Tubarão" src={Tuba2} />
            <p className="legend"> Performance Tubarão <br></br> Fotos:Kaê</p>
        </div>
        <div>
            <img alt="Performance Tubarão" src={Tuba3} />
            <p className="legend"> Performance Tubarão <br></br> Fotos:Kaê</p>
        </div>
        <div>
            <img className="paisagem1" alt="Performance Tubarão" src={Tuba4} />
            <p className="legend"> Performance Tubarão <br></br> Fotos:Kaê</p>
        </div>
        <div>
            <img className="paisagem1" alt="Performance Tubarão" src={Tuba5} />
            <p className="legend"> Performance Tubarão <br></br> Fotos:Kaê</p>
        </div>
        <div>
            <img className="paisagem1" alt="Performance Tubarão" src={Tuba6} />
            <p className="legend"> Performance Tubarão <br></br> Fotos:Kaê</p>
        </div>
        <div>
            <img className="paisagem1" alt="Performance Tubarão" src={Tuba7} />
            <p className="legend"> Performance Tubarão <br></br> Fotos:Kaê</p>
        </div>
        <div>
            <img className="paisagem1" alt="Performance Tubarão" src={Tuba8} />
            <p className="legend"> Performance Tubarão <br></br> Fotos:Kaê</p>
        </div>
        <div>
            <img alt="Performance Tubarão" src={Tuba9} />
            <p className="legend"> Performance Tubarão <br></br> Fotos:Kaê</p>
        </div>
        
    </Carousel>
);
  }
