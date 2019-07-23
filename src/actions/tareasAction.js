import axios from 'axios';
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
import Tareas from '../components/Tareas';

export const traerTodasLasTareas = () => async (dispatch) => {

    // antes de la llamada axios:
    dispatch({
        type: ESTADO_CARGANDO
    });

    try {
        const tareasApi = await axios.get('https://jsonplaceholder.typicode.com/todos');

        // normalizando manualmente los datos
        const tareasProcesadas = {};

        tareasApi.data.map((tareaItem) => (
            tareasProcesadas[tareaItem.userId] = {
                ...tareasProcesadas[tareaItem.userId],
                [tareaItem.id]: {
                    ...tareaItem
                }
            }
        ))

        dispatch({
            type: TRAER_TODAS_LAS_TAREAS,
            payload: tareasProcesadas
        });
    }
    catch(error) {
        console.error(error);
        //error.message
        dispatch({
            type: ERROR_REQUEST,
            payload: 'Error al intentar cargar las tareas'
        });
    }
}


export const cambiarUsuarioId = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIAR_USUARIO_ID,
        payload: valor
    })
}

export const cambiarTituloTarea = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIAR_TITULO_TAREA,
        payload: valor
    })
}

export const agregarTarea = (nuevaTarea) => async (dispatch) => {
    
    dispatch({
        type: ESTADO_CARGANDO
    });

    try {
        const respuesta = await axios.post('https://jsonplaceholder.typicode.com/todos',
            nuevaTarea
        );
        console.log(respuesta.data);
        dispatch({
            type: TAREA_AGREGADA_EDITADA
        });
    }
    catch(error) {
        console.log(error.message);
        dispatch({
            type: ERROR_REQUEST,
            payload: 'Error al intentar crear una tarea'
        });        
    }
}

export const editarTarea = (tareaEditada) => async (dispatch) => {
    dispatch({
        type: ESTADO_CARGANDO
    });

    try {
        const respuesta = await axios.put('https://jsonplaceholder.typicode.com/todos/' + tareaEditada.id,
            tareaEditada
        );
        dispatch({
            type: TAREA_AGREGADA_EDITADA
        });
    }
    catch(error) {
        console.log(error.message);
        dispatch({
            type: ERROR_REQUEST,
            payload: 'Error al intentar crear una tarea'
        });        
    }
}

export const cambioCheckbox = (usuarioId, tareaItem) => (dispatch, getState) => {
    const {tareas} = getState().tareasReducer;
    const seleccionada = tareas[usuarioId][tareaItem];

    const actualizadas = {
        ...tareas
    }

    actualizadas[usuarioId] = {
        ...tareas[usuarioId]
    };

    actualizadas[usuarioId][tareaItem] = {
        ...tareas[usuarioId][tareaItem],
        completed: !seleccionada.completed
    };

    dispatch({
        type: ACTUALIZAR_TAREAS_CHECKED,
        payload: actualizadas
    })
}


export const eliminarTarea = (tareaId) => async (dispatch) => {
    dispatch({
        type: ESTADO_CARGANDO
    });

    try {
        const respuesta = await axios.delete('https://jsonplaceholder.typicode.com/todos/' + tareaId);
        dispatch({
            type: TRAER_TODAS_LAS_TAREAS,
            payload: {}
        });
    }
    catch(error) {
        dispatch({
            type: ERROR_REQUEST,
            payload: 'Error al intentar Eliminar una tarea'
        });   
    }
}



export const limpiarFormulario = () => (dispatch) => {
    dispatch({
        type: LIMPIAR
    })
}