import React from "react";

const Pagination = props => {
    return (
        <div className="py-3">
            <button onClick={ props.paginaAnterior } type="button" className="btn btn-info mr-1">Anterior &larr;</button>
            <button onClick={ props.paginaSiguiente } type="button" className="btn btn-info mr-1">Siguiente &rarr;</button>
        </div>
    )
}

export default Pagination;