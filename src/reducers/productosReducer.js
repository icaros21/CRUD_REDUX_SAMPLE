//Cada reducer tiene su propio state
import {
    AGREGAR_PRODUCTO_ERROR, 
    AGREGAR_PRODUCTO_EXITO, 
    AGREGAR_PRODUCTO,
    DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    ELIMINAR_PRODUCTOS,
    ELIMINAR_PRODUCTOS_EXITO,
    ELIMINAR_PRODUCTOS_ERROR,
    EDITAR_PRODUCTOS,
    EDITAR_PRODUCTOS_EXITO,
    EDITAR_PRODUCTOS_ERROR,
    SELECCIONAR_PRODUCTO
} from '../types';
import { act } from 'react-dom/test-utils';

const initialState = {
    productos : [],
    error: false,
    loading: false,
    productoEditar: {
        id: 0,
        nombreProducto: '',
        precioProducto: ''
    }
}

export  default function(state = initialState, action) {
    switch (action.type){
        case DESCARGA_PRODUCTOS:
            return {
                ...state,
                loading: true,
            }
        case DESCARGA_PRODUCTOS_EXITO:
            return{
                ...state,
                loading: false,
                productos: action.payload
            }
        case DESCARGA_PRODUCTOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: true,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading:false,
                productos: [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case ELIMINAR_PRODUCTOS:
            return{
                ...state,
                loading: true
            }
        case ELIMINAR_PRODUCTOS_EXITO:
            return{
                ...state,
                loading:false,
                productos: state.productos.filter(item => item.id !== action.payload.id)
            }
        case ELIMINAR_PRODUCTOS_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        case SELECCIONAR_PRODUCTO:
            return{
                ...state,
                productoEditar: action.payload
            }
        case EDITAR_PRODUCTOS:
            return{
                ...state,
                loading: true,
                productoEditar: action.payload
            }
        case EDITAR_PRODUCTOS_EXITO:
            state.productos[state.productos.findIndex(item => item.id === action.payload.id)] = action.payload
            return{
                ...state,
                loading:false,
                productos: state.productos
            }
        case EDITAR_PRODUCTOS_ERROR:
            return{
                ...state,
                loading:false,
                error: action.payload
            }
        default:
            return state;
    }
}