import React, {useState, useEffect} from 'react'; 
import {useDispatch, useSelector} from 'react-redux'; 
import {useHistory} from 'react-router-dom';
import {editarProductoAction} from '../actions/productosActions';

const EditarProducto = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const productoEditar = useSelector(state => state.productos.productoEditar);
    const cargando = useSelector(state => state.productos.loading)
    const error =  useSelector(state => state.productos.error)

    const [productoModel, setProductoModel] = useState({
        nombreProducto: '',
        precioProducto: ''
    })

    useEffect(() => {
        setProductoModel(productoEditar)
    }, [])
    
    const editarProducto = (producto) => dispatch(editarProductoAction(producto));

    const onSubmitHandler = (event) => {
        event.preventDefault();

        editarProducto(productoModel).then(() => {
            history.push('/')     
        });  
    }

    const onChangeHandler = (event) => {
        setProductoModel({
            ...productoModel,
            [event.target.name]: event.target.value
        })
    }

    return ( 
        <section className="section">
        
            <div className="card">
                <section className="section">
                    <h1 className="title has-text-centered">Editar producto</h1>
                </section>
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={e => onSubmitHandler(e)}>
                            <div className="field">
                                <label className="label">Nombre Producto</label>
                                <div className="control">
                                    <input 
                                        type="text" 
                                        placeholder="Nombre producto"
                                        className="input"
                                        name="nombreProducto"
                                        onChange={e=> onChangeHandler(e)}
                                        value={productoModel.nombreProducto}
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
                                        onChange={e=> onChangeHandler(e)}
                                        value ={productoModel.precioProducto}
                                    />
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <input type="submit" className="button is-link" value="Guardar"/>
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