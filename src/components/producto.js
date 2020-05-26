import React from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import sweetAlert from 'sweetalert2';
import {eliminarProductoAction, seeccionarProductoAction} from '../actions/productosActions';

const Producto = ({producto}) => {
    const {nombreProducto, precioProducto, id} = producto;

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmarEliminarProduto = id => {
        sweetAlert.fire({
            title: "Eliminar",
            text: "Seguro que deseas eliminar",
            showCancelButton: true,
            confirmButtonText: "Sí"
        }).then((result) =>{
                if(result.value){
                    dispatch(eliminarProductoAction(id))
                }
            }
        )
    }

    const seleccionarProductoHandler = (producto) => {
        dispatch(seeccionarProductoAction(producto))

        history.push(`EditarProducto/${id}`)
    }
        
    return (  
        <tr>
            <td>
                {nombreProducto}
            </td>
            <td>
                $ {precioProducto}
            </td>
            <td>
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>Acciones</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <div className="dropwdown-item">
                                <button type="button" onClick={e=> seleccionarProductoHandler(producto)} className="button is-primary">Editar</button>
                            </div>
                            <hr className="dropdown-divider"></hr>
                            <div className="dropwdown-item">
                                <button type="button" className="button is-secondary" onClick={e => confirmarEliminarProduto(producto)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
}
 
export default Producto;