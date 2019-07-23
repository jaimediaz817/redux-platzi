import { bindActionCreators } from "redux";
import { 
    TRAER_TODOS_LOS_USUARIOS,
    ESTADO_CARGANDO,
    ERROR_REQUEST
 } from '../types/usuariosTypes';

const INITIAL_STATE = {
    usuarios: [],
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TRAER_TODOS_LOS_USUARIOS:
            return { 
                ...state,
                usuarios: action.payload,
                loading: false,
                error: ''
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
        default: return state;
    }
}