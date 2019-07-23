import axios from 'axios';
import { 
    TRAER_TODOS_LOS_USUARIOS, 
    ESTADO_CARGANDO,
    ERROR_REQUEST
} from '../types/usuariosTypes';

export const traerTodosLosUsuarios = () => async (dispatch) => {

    // antes de la llamada axios:
    dispatch({
        type: ESTADO_CARGANDO
    });

    try {
        const usuariosApi = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch({
            type: TRAER_TODOS_LOS_USUARIOS,
            payload: usuariosApi.data
        });
    }
    catch(error) {
        console.error(error);
        //error.message
        dispatch({
            type: ERROR_REQUEST,
            payload: 'Error al intentar cargar la lista de usuarios'
        });
    }
}