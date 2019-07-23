import { bindActionCreators } from "redux";
import Tareas from './../components/Tareas/index';
import { 
    TRAER_TODAS_LAS_TAREAS,
    ESTADO_CARGANDO,
    ERROR_REQUEST,
    CAMBIAR_USUARIO_ID,
    CAMBIAR_TITULO_TAREA,
    TAREA_AGREGADA_EDITADA,
    ACTUALIZAR_TAREAS_CHECKED,
    LIMPIAR
 } from '../types/tareasTypes';


const INITIAL_STATE = {
    tareas: {},
    loading: false,
    error: '',
    usuarioId: '',
    tituloTarea: '',
    regresarHome: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TRAER_TODAS_LAS_TAREAS:
            return { 
                ...state,
                tareas: action.payload,
                loading: false,
                error: '',
                regresarHome: false
            }
        case ESTADO_CARGANDO:
            return { 
                ...state, 
                loading: true 
            }
        case ERROR_REQUEST:
            return { 
                ...state,
                error: action.payload,
                loading: false
            }
        case CAMBIAR_USUARIO_ID:
            return {
                ...state,
                usuarioId: action.payload
            }
        case CAMBIAR_TITULO_TAREA:
            return {
                ...state,
                tituloTarea: action.payload
            }            
        case TAREA_AGREGADA_EDITADA:
            return {
                ...state,
                loading: false,
                error: '',
                tareas: {},
                usuarioId: '',
                tituloTarea: '',
                regresarHome: true
            }
            
        case ACTUALIZAR_TAREAS_CHECKED:
            return {
                ...state,
                tareas: action.payload
            }
        case LIMPIAR:
            return {
                ...state,
                usuarioId: '',
                tituloTarea: ''
            }
        default: return state;
    }
}