//import { bindActionCreators } from "redux";
import { 
    TRAER_TODAS_LAS_PUBLICACIONES,
    TRAER_PUBLICACION_POR_USUARIO,
    ESTADO_CARGANDO,
    ERROR_REQUEST,
    ESTADO_CARGANDO_COMENTARIO,
    ERROR_COMENTARIO_REQUEST,
    ACTUALIZAR_COMENTARIOS_POR_PUBLICACION
 } from '../types/publicacionesTypes';

const INITIAL_STATE = {
    publicaciones: [],
    loading: false,
    error: '',
    commentarioLoading: false,
    comentarioError: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {        
        case TRAER_TODAS_LAS_PUBLICACIONES:
            return { 
                ...state,
                publicaciones: action.payload,
                loading: false,
                error: ''
            }
            case TRAER_PUBLICACION_POR_USUARIO:
                return { 
                    ...state,
                    publicaciones: action.payload,
                    loading: false,
                    error: ''
                }

            case ACTUALIZAR_COMENTARIOS_POR_PUBLICACION:
                return { 
                    ...state,
                    publicaciones: action.payload,
                    loading: false,
                    error: '',
                    commentarioLoading: false,
                    comentarioError: ''
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
            // COMENTARIOS
            case ESTADO_CARGANDO_COMENTARIO:
                return { 
                    ...state, 
                    commentarioLoading: true
                }
            case ERROR_COMENTARIO_REQUEST:
                console.log("from reducer :: ", action.payload)
                return { 
                    ...state,
                    comentarioError: action.payload,
                    commentarioLoading: false
                }            

        default: return state;
    }
}