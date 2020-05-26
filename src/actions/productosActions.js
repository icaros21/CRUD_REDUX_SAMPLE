import clienteAxios from '../config/axios';
import sweetAlert from 'sweetalert2';
import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,

    DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO,

    ELIMINAR_PRODUCTOS,
    ELIMINAR_PRODUCTOS_ERROR,
    ELIMINAR_PRODUCTOS_EXITO,
    EDITAR_PRODUCTOS,
    EDITAR_PRODUCTOS_EXITO,
    EDITAR_PRODUCTOS_ERROR,
    
    SELECCIONAR_PRODUCTO
} from '../types';

export function eliminarProductoAction(producto){
    return async (dispatch) => {
        dispatch(eliminarProducto())

        try {
            const respuesta = await clienteAxios.delete(`/Productos/${producto.id}`)
            
            dispatch(eliminarProductoExito(producto))

            sweetAlert.fire("Eliminardo", "Elemento eliminado", "success")
        } catch (error) {
            dispatch(eliminarProductoError(true))
        }
    }
}


export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch(obtenerProductos())

        try {
            const respuesta = await clienteAxios.get('/Productos')
            
            dispatch(obtenerProductosExito(respuesta.data))
        } catch (error) {
            dispatch(obtenerProductosError(true))
        }
    }
}

export function crearNuevoProductoAction(producto){

    return async (dispatch) => {
        dispatch(agregarProducto())

        try {
            await clienteAxios.post('/Productos', producto)

            dispatch(agregarProductoExito(producto))

            sweetAlert.fire("Correcto", "Se agrego Correctamente", "success")
        } catch (error) {
            dispatch(agregarProductoError(true))

            sweetAlert.fire("Error", "Ocurrio un error", "error")
        }
    }
}

export function editarProductoAction(producto){

    return async (dispatch) => {
        dispatch(editarProducto())

        try {
            await clienteAxios.put(`/Productos/${producto.id}`, producto)

            sweetAlert.fire("Correcto", "Se actualizó Correctamente", "success").then((result) =>
            {
                if(result.value){
                    dispatch(editarProductoExito(producto))
                }
            })
        } catch (error) {
            dispatch(editarProductoError(true))

            sweetAlert.fire("Error", "Ocurrio un error", "error")
        }
    }
}

export function seeccionarProductoAction(producto){
    return async (dispatch) => {
        dispatch(seleccionarProducto(producto))
    }
}

const seleccionarProducto = (producto) => ({
    type: SELECCIONAR_PRODUCTO,
    payload: producto
})

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
})

const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto,
})

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

const obtenerProductos = () => ({
    type: DESCARGA_PRODUCTOS
})

const obtenerProductosExito = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload:  productos
})

const obtenerProductosError = (estado) => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: estado
})

const eliminarProducto = () => ({
    type: ELIMINAR_PRODUCTOS
})

const eliminarProductoExito = (producto) => ({
    type: ELIMINAR_PRODUCTOS_EXITO,
    payload:  producto
})

const eliminarProductoError = (estado) => ({
    type: ELIMINAR_PRODUCTOS_ERROR,
    payload: estado
})

const editarProducto = () => ({
    type: EDITAR_PRODUCTOS
})

const editarProductoExito = (producto) => ({
    type: EDITAR_PRODUCTOS_EXITO,
    payload:  producto
})

const editarProductoError = (estado) => ({
    type: EDITAR_PRODUCTOS_ERROR,
    payload: estado
})