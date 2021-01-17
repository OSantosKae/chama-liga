import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Menu from './componentes/menu/menu';
import Home from './componentes/home/home';
import Sobre from './componentes/sobre/sobre';
import GaleriaRecife from './componentes/galeria/galeriaRecife';
import GaleriaTubarao from './componentes/galeria/galeriaTubarao';
import Contatinho from './componentes/contatinho/contatinho';
import Filmes from './componentes/filmes/filmes';
import Portfolio from './componentes/portfolio/portfolio';
//BrowserRouter mapeamento das páginas
//Switch direciona para a pag que a gente criou, qual rota abre qual componente
//Route é a rota em si




export default function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}/>
{/*exact pra dizer que tem mais de uma rota
nome de component começa com letra MAIUSCULA quando for path letra minuscula*/}
        <Route path="/home" component={Home}/>
        <Route path="/sobre" component={Sobre}/>
        <Route path="/galeriarecife" component={GaleriaRecife}/>
        <Route path="/galeriatubarao" component={GaleriaTubarao}/>
        <Route path="/filmes" component={Filmes}/>
        <Route path="/contatinho" component={Contatinho}/>
        <Route path="/portfolio" component={Portfolio}/>

      
      </Switch>
    </div>
    </BrowserRouter>
  );
}
