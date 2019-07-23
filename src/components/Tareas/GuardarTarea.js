import React, { Component } from 'react';
import { connect } from 'react-redux';

// COMPONENTES
import Spinner from '../helpers/Spinner';
import Fatal from '../general/Fatal';
import '../general/Fatal.css';

import { Redirect } from 'react-router-dom';

import * as tareasAction from '../../actions/tareasAction';

class GuardarTarea extends Component {

    componentDidMount() {
        const {
            match: { params: { usua_id, tarea_id}},
            cambiarUsuarioId, cambiarTituloTarea, tareas, limpiarFormulario
        } = this.props;

        // si el usuario id está en el parametro y la tarea:
        if (usua_id && tarea_id){
            const tarea = tareas[usua_id][tarea_id];
            cambiarUsuarioId(tarea.userId);
            cambiarTituloTarea(tarea.title);
        } else {
            limpiarFormulario();
        }

    }


    cambiarUsuarioId = (event) => {
        console.log(event.target.value);
        this.props.cambiarUsuarioId(event.target.value);
    }

    cambiarTituloTarea = (event) => {
        this.props.cambiarTituloTarea(event.target.value);
    }

    guardarTarea = () => {
        const {
            match: { params: { usua_id, tarea_id}},
            usuarioId,
            tituloTarea,
            agregarTarea,
            tareas,
            editarTarea

        } = this.props;

        const tareaObj = {
            usuarioId,
            tituloTarea,
            completed: false
        };

        if (usua_id && tarea_id) {
            const tarea = tareas[usua_id][tarea_id];
            const tareaEditada = {
                ...tareaObj,
                completed: tarea.completed,
                id: tarea.id
            }
            editarTarea(tareaEditada);
        } else {
            agregarTarea(tareaObj);
        }
        
    }

    deshabilitarBoton = () => {
        const {
            usuarioId, tituloTarea, loading
        } = this.props;

        if (loading){
            return true;
        }

        if (!usuarioId || !tituloTarea){
            return true;
        } 
        return false;
    }   
    
    mostrarAccionTarea = () => {
        const {
            error,
            loading
        } = this.props;

        if (loading){
            return <Spinner />
        }
        if (error){
            return <Fatal mensaje={ error }/>
        }
    }

    render() {

        if (this.props.regresarHome) return <Redirect to='/tareas' />;

        return (
            <div className="j-container container">

                <div className="row">
                    <div className="col-6">                    
                        <h1>Guardar Tareas</h1>

                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-info">
                                    Datos del usuario
                                </span>                            
                            </div>
                            <div className="card-body p-4">
                                <div className="form-group formulario row">
                                    <label>ID del usuario:</label>
                                    <input 
                                        type='number'
                                        className="form-control"
                                        value={ this.props.usuarioId }
                                        onChange={ this.cambiarUsuarioId }
                                    />
                                    <br />

                                    <label>Título:</label>
                                    <input 
                                        type='text'
                                        className="form-control"
                                        value = { this.props.tituloTarea}
                                        onChange = { this.cambiarTituloTarea }
                                    />
                                </div>                            
                            </div>
                            <div className="card-footer">
                                <button 
                                    className="btn btn-primary bg-primary text-light  d-block"
                                    onClick={ this.guardarTarea }
                                    disabled ={ this.deshabilitarBoton() }
                                >
                                    Guardar
                                </button> 
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        {
                            this.mostrarAccionTarea()
                        }
                    </div>
                </div>


            </div>
        );
    }
}

const mapStateToProps = ({tareasReducer}) => tareasReducer;

export default connect(mapStateToProps, tareasAction)(GuardarTarea);
