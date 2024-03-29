import { render } from '@testing-library/react';
import React, { Component } from 'react';

import Buscador from './components/Buscador';
import Resultado from './components/Resultado';


class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: '',
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
        //leer el state de la página actual
        let pagina = this.state.pagina;

        //Validar que si la página es uno, retorne null
        if(pagina === 1 ) return null;

        //sumar uno a la página actual
        pagina = pagina - 1;
    
        //Agregar el cambio al state
        this.setState({
          pagina
        }, () => {
          this.consultarApi();
          this.scroll();
        });
    
        console.log(pagina);
  }

  paginaSiguiente = () => {
    //leer el state de la página actual
    let pagina = this.state.pagina;

    //sumar uno a la página actual
    pagina = pagina + 1;

    //Agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    console.log(pagina);
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=42480672-69943e18e1729b4fad8e2666b&q=${ termino }&per_page=30&page=${pagina}`;
    // console.log(url);
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState( { imagenes: resultado.hits } )) 
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <React.Fragment>
        
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center"> Buscador de imágenes </p>
          <Buscador 
          datosBusqueda={this.datosBusqueda}/>
        </div>
        <div className="row justify-content-center">
          <Resultado
          imagenes={this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}/>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
