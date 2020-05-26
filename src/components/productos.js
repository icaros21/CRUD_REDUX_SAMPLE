import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import  {obtenerProductosAction} from '../actions/productosActions'
import Producto from './producto';

const Productos = () => {
    const dispatch = useDispatch();

    const obtenerProductos = () => dispatch(obtenerProductosAction());
    const productos = useSelector(state => state.productos.productos);

    const cargando = useSelector(state => state.productos.loading)
    const error =  useSelector(state => state.productos.error)

    useEffect(() => {
        obtenerProductos();
    }, [])

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
                                <tr>
                                    <td>Nombre</td>
                                    <td>Precio</td>
                                    <td>Acciones</td>
                                </tr>
                            </thead>
                            <tbody>
                                {productos.length === 0 ? <tr><td>No hay productos</td></tr> : productos.map((producto) => (
                                    <Producto key={producto.id} producto = {producto}/>
                                ))}
                            </tbody>
                        </table>
                        { cargando ? <p>Cargando...</p> : null}
                        { error ? <div className="notification is-danger">Hubo un error</div> : null}
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Productos;