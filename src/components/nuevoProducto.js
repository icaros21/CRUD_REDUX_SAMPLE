import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {crearNuevoProductoAction} from '../actions/productosActions';

const NuevoProducto = ({history}) => {
    const [nombreProducto, agregarNombreProducto] = useState('');
    const [precioProducto, agregarPrecioProducto] = useState(0);

    const dispatch = useDispatch();

    const cargando = useSelector(state => state.productos.loading)
    const error =  useSelector(state => state.productos.error)

    const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

    const onSubmitHandler = (e) => {
        e.preventDefault();

        agregarProducto({
                nombreProducto,
                precioProducto
            }
        ).then(() =>{
            history.push('/')   
        })      
    }

    return ( 
        <section className="section">
        
            <div className="card">
                <section className="section">
                    <h1 className="title has-text-centered">Nuevo producto</h1>
                </section>
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={onSubmitHandler}>
                            <div className="field">
                                <label className="label">Nombre Producto</label>
                                <div className="control">
                                    <input 
                                        type="text" 
                                        placeholder="Nombre producto"
                                        className="input"
                                        name="nombreProducto"
                                        onChange={e => agregarNombreProducto(e.target.value)}
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
                                        onChange={e => agregarPrecioProducto(Number(e.target.value))}
                                    />
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <input type="submit" className="button is-link" value="Guardar" />
                                </div>
                                <div className="control">
                                    <input type="button" className="button is-link is-light" value="Cancelar" />
                                </div>
                            </div>
                        </form>
                        { cargando ? <p>Cargando...</p> : null}
                        { error ? <div className="notification is-danger">Hubo un error</div> : null}
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default NuevoProducto;