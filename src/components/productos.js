import React from 'react';

const Productos = () => {
    return ( 
        <section className="section">
        
            <div className="card">
                <section className="section">
                    <h1 className="title has-text-centered">Listado producto</h1>
                </section>
                <div className="card-content">
                    <div className="content">
                        <table className="table is-hoverable is-stripped">
                            <thead>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        algo
                                    </td>
                                    <td>
                                        ALGO MAS
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Productos;