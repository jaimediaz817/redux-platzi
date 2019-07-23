import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Publicaciones.css';

import Spinner from '../helpers/Spinner';
import '../general/Fatal';
import Fatal from '../general/Fatal';
import Comentario from './Comentario';

import  * as usuariosAction   from '../../actions/usuariosActions';
import  * as publicacionesAction   from '../../actions/publicacionesActions';
//import Publicaciones from './Publicaciones';
import { abrirYcerrar } from './../../actions/publicacionesActions';

// trayendo el type (destructurando)


class Publicaciones extends Component {

    async componentDidMount() {
        const {
            usuariosReducer,
            traerPublicacionesPorUsuario,
            traerTodosLosUsuarios,
            match: { params: { key } }
        } = this.props;

        if (!usuariosReducer.usuarios.length){
            console.log("<<< traer usuarios >>>");
            await traerTodosLosUsuarios();
            //this.props.traerTodasLasPublicaciones();            
        }

        if (this.props.usuariosReducer.error){
            return;
        }

        if(!('publicaciones_key' in this.props.usuariosReducer.usuarios[key])){
            traerPublicacionesPorUsuario(key);
        }
    }

    // USUARIOS  ::::::::::::::::::::::::::::::
    ponerUsuario = () =>  {
        // como es parte del render se puede destructurar el usuario
        const {
            usuariosReducer,
            match: { params: { key } }
        } = this.props;

        if (usuariosReducer.error){
            return <Fatal mensaje={ usuariosReducer.error }/>;
        }        

        if (!usuariosReducer.usuarios.length || usuariosReducer.loading) {
            return <Spinner />;
        }

        // sacar nombre:
        const nombreUsuario = usuariosReducer.usuarios[key].name;

        return (<h1>Publicaciones del usuario: <strong>{ nombreUsuario }</strong></h1>);
    };

    // PUBLICACIONES ::::::::::::::::::::::::::::::
    ponerPublicaciones = () => {
        const {
            usuariosReducer,
            usuariosReducer: { usuarios },
            publicacionesReducer,
            publicacionesReducer: { publicaciones },
            match: { params: { key } }
        } = this.props;

        if (!usuarios.length) return;
        if (usuariosReducer.error) return;
        
        if (publicacionesReducer.loading){
            return <Spinner />
        }
        if (publicacionesReducer.error){
            return <Fatal mensaje={ publicacionesReducer.error } />
        }

        if (!publicaciones.length) return;
        if (!('publicaciones_key' in usuarios[key])) return;

        //  DESTRUCTURAR PUBLICACIONES KEY
        const { publicaciones_key } = usuarios[key];
        return this.mostrarInformacionPublicacion(
            publicaciones[publicaciones_key],
            publicaciones_key

        );
    };

    mostrarInformacionPublicacion = (publicaciones, publicaciones_key) => (
        publicaciones.map((publicacion, commentKey) => (
            <div 
                className="item-publicacion"
                key={ publicacion.id }
                onClick={ ()=> this.mostrarComentarios(publicaciones_key, commentKey, publicacion.comentarios) }
            >
                <h2>{ publicacion.title }</h2>
                <h5>{ publicacion.body }</h5>
                {
                    (publicacion.abierto) ? <Comentario comentarios={ publicacion.comentarios } /> : 'Cerrado'
                }
            </div>
        ))  
    );

    mostrarComentarios = (publicaciones_key, commentKey, comentarios) => {
        console.log("desde componente publicaciones ::: comentarios ::: ", comentarios)
        this.props.abrirYcerrar(publicaciones_key, commentKey);

        if (!comentarios.length){
            this.props.traerComentarios(publicaciones_key, commentKey);
        }        
    }

    render() {
        console.log(this.props);
        return (
            <div className="j-container container">
                
                { /*Publicaciones : { this.props.match.params.key}*/ }
                { this.ponerUsuario() }
                { this.ponerPublicaciones() }
            </div>
        );
    }
}

const mapStateToProps = ({usuariosReducer, publicacionesReducer}) => {
    return {
        usuariosReducer,
        publicacionesReducer
    }
}

const mapDispatchToProps = {
    ...usuariosAction,
    ...publicacionesAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
