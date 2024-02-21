import React, {Component} from 'react';
import Imagen from './Imagen';
import Pagination from './Pagination';

class Resultado extends Component {
    mostrarImagenes = () => {

        const imagenes = this.props.imagenes;

        if(imagenes.length === 0) return null;

        // console.log(imagenes);

        return (
            <React.Fragment>
                <div className='col-12 p-5 row'>
                    { imagenes.map( imagen => (
                        <Imagen 
                        key={imagen.id}
                        imagen={imagen}/>
                    )) }
                </div>
                <Pagination
                    paginaAnterior={ this.props.paginaAnterior }
                    paginaSiguiente={ this.props.paginaSiguiente }/>
            </React.Fragment>
        );

        console.log(imagenes);
    }

    render() { 
        return (
            <>
                {this.mostrarImagenes() }
            </>
            
        );
    }
}
 
export default Resultado;