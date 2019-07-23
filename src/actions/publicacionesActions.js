import axios from 'axios';

import { 
    TRAER_TODAS_LAS_PUBLICACIONES, 
    ESTADO_CARGANDO,
    ERROR_REQUEST,
    TRAER_PUBLICACION_POR_USUARIO,
    ESTADO_CARGANDO_COMENTARIO,
    ERROR_COMENTARIO_REQUEST,
    ACTUALIZAR_COMENTARIOS_POR_PUBLICACION
} from '../types/publicacionesTypes';

import { 
    TRAER_TODOS_LOS_USUARIOS
} from '../types/usuariosTypes';

export const traerTodasLasPublicaciones = () => async (dispatch) => {

    // antes de la llamada axios:
    dispatch({
        type: ESTADO_CARGANDO
    });

    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch({
            type: TRAER_TODAS_LAS_PUBLICACIONES,
            payload: respuesta.data
        });
    }
    catch(error) {
        console.error(error);
        //error.message
        dispatch({
            type: ERROR_REQUEST,
            payload: 'Error interno en la plataforma, intente más tarde por favor.'
        });
    }
}

export const traerPublicacionesPorUsuario = (idUsuario) => async (dispatch, getState) => {
    // antes de la llamada axios:
    dispatch({
        type: ESTADO_CARGANDO
    });

    // destructurando los estados
    const { usuarios } = getState().usuariosReducer;
    const { publicaciones } = getState().publicacionesReducer;

    // Proccess object
    const usuarioObj = usuarios[idUsuario];
    const usuario_id = usuarioObj.id;
    
    console.log("desde el actions de publicaciones: " + idUsuario)
    console.log(" ahora procesando el objeto :: ", usuarioObj.id)    

    try {    

        // llamada AXIOS
        const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=` + usuario_id);

        const nuevasPublicaciones = respuesta.data.map((publicacion) => ({
            ...publicacion,
            comentarios: [],
            abierto: false
        }));

        const publicacionesActualizadas = [
            ...publicaciones,
            nuevasPublicaciones
        ];

        dispatch({
            type: TRAER_PUBLICACION_POR_USUARIO,
            payload: publicacionesActualizadas //respuesta.data
        });        

        //-------------- agregar una key a cada objeto usuario
        const publicaciones_key = publicacionesActualizadas.length - 1;
        const usuariosActualizados = [ ...usuarios];
        usuariosActualizados[idUsuario] = {
            ...usuarios[idUsuario],
            publicaciones_key
        }

        dispatch({
            type: TRAER_TODOS_LOS_USUARIOS,
            payload: usuariosActualizados
        })
        //-----------------------------------------------------
        
    }
    catch(error) {
        console.error(error);
        //error.message
        dispatch({
            type: ERROR_REQUEST,
            payload: 'Error al intentar cargar la list de publicaciones.'
        });
    }

}

export const abrirYcerrar = (publicKey, commentKey) => (dispatch, getState) => {

    const {publicaciones} = getState().publicacionesReducer;
    const pubSeleccionada = publicaciones[publicKey][commentKey];

    const pubActulizada = {
        ...pubSeleccionada,
        abierto: !pubSeleccionada.abierto
    };

    // accion inmutable (nivel por nivel que pub. estoy haciendo)
    const nuevasPubActualizadas = [...publicaciones];

    nuevasPubActualizadas[publicKey] = [
        ...publicaciones[publicKey]
    ];

    nuevasPubActualizadas[publicKey][commentKey] = pubActulizada;

    dispatch({
        type: TRAER_PUBLICACION_POR_USUARIO,
        payload: nuevasPubActualizadas
    });
}




export const traerComentarios = (publicKey, commentKey) =>  async (dispatch, getState) => {

    const {publicaciones} = getState().publicacionesReducer;
    const pubSeleccionada = publicaciones[publicKey][commentKey];
    console.log("desde la accion mostrar comentario::: ", pubSeleccionada)

    dispatch({
        type: ESTADO_CARGANDO_COMENTARIO
    });

    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + pubSeleccionada.id)

        const pubActualizada = {
            ...pubSeleccionada,
            comentarios: respuesta.data
        };
    
        // accion inmutable (nivel por nivel que pub. estoy haciendo)
        const nuevasPubActualizadas = [...publicaciones];
    
        nuevasPubActualizadas[publicKey] = [
            ...publicaciones[publicKey]
        ];
    
        nuevasPubActualizadas[publicKey][commentKey] = pubActualizada;    
    
        dispatch({
            type: ACTUALIZAR_COMENTARIOS_POR_PUBLICACION,
            payload: nuevasPubActualizadas
        });
    }
    catch(error) {
        console.error(error);
        //error.message
        dispatch({
            type: ERROR_COMENTARIO_REQUEST,
            payload: 'Error al intentar cargar los comentarios asociados a la publicación.'
        });
    }
}