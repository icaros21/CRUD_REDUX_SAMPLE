import React from 'react';  

const EditarProducto = () => {
    return ( 
        <section className="section">
        
            <div className="card">
                <section className="section">
                    <h1 className="title has-text-centered">Editar producto</h1>
                </section>
                <div className="card-content">
                    <div className="content">
                        <form>
                            <div className="field">
                                <label className="label">Nombre Producto</label>
                                <div className="control">
                                    <input 
                                        type="text" 
                                        placeholder="Nombre producto"
                                        className="input"
                                        name="nombreProducto"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Precio del producto</label>
                                <div className="control">
                                    <input 
                                        type="text" 
                                        placeholder="Precio producto"
                                        className="input"
                                        name="precioProducto"
                                    />
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <input type="button" className="button is-link" value="Guardar" />
                                </div>
                                <div className="control">
                                    <input type="button" className="button is-link is-light" value="Cancelar" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default EditarProducto;