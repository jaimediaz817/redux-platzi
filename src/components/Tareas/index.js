import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as tareasAction from '../../actions/tareasAction';

// COMPONENTS
import Spinner from '../helpers/Spinner';
import GuardarTarea from './GuardarTarea';
import Fatal from '../general/Fatal';
import '../general/Fatal.css';
import './Tareas.css';

// LINKS
import { Link } from 'react-router-dom';

class Tareas extends Component {

    componentDidMount() {
        if (!Object.keys(this.props.tareas).length){
            this.props.traerTodasLasTareas();
        }        
    }

    componentDidUpdate() {
        const {
            traerTodasLasTareas,
            loading,
            tareas
        } = this.props;
        
        if (!Object.keys(tareas).length && !loading){
            traerTodasLasTareas();
        }  
    }    

    mostrarContenidoTarea = () => {
        const {
            tareas,
            loading,
            error
        } = this.props;

        if (loading){
            return <Spinner />;
        }

        if (error){
            return <Fatal mensaje={ error } />
        }

        return Object.keys(tareas).map( (usu_id) => (
            <div key={usu_id} >                
                <h2 className="usuario-titulo"><strong>Usuario: </strong>{ usu_id }</h2>
                <div className="tareas-container">
                    { this.ponerTareas(usu_id) }
                </div>
            </div>            
        ))
    }

    ponerTareas = (usuarioId) => {
        const { tareas, cambioCheckbox, eliminarTarea } = this.props;
        const por_usuario = {
            ...tareas[usuarioId]
        };

        return Object.keys(por_usuario).map((tareaItem) =>(

            <div key={ tareaItem } className="item">
                <div className="row">
                    <div className="col-6">
                        <input 
                        type='checkbox'
                        defaultChecked={ por_usuario[tareaItem].completed }
                        onChange={ ()=> cambioCheckbox( usuarioId, tareaItem) }
                    />
                    { por_usuario[tareaItem].title }
                    </div>

                    <div className="col-6">
                        <div className="botones-container d-flex">
                            <button
                                className="btn btn-warning bg-warning text-light"                                
                            >
                                <Link className="text-light w-100 h-100 d-block" to={`/tareas/guardar/${usuarioId}/${tareaItem}`}>
                                    Editar
                                </Link>                                
                            </button>

                            <button
                                className="btn btn-danger bg-danger text-light"
                                onClick={ ()=> eliminarTarea(tareaItem)}
                            >
                                    Eliminar
                            </button>                    
                        </div>        
                    </div>                    
                </div>
                <span />
            </div>
        ));
    }

    render() {
        return (
            <div className="j-container container">
                <button className="btn btn-primary bg-primary text-light btn-agregar-tarea">                    
                    <Link to='/tareas/guardar' className="text-light  w-100 h-100 d-block">                        
                        Agregar tarea
                    </Link>
                </button>
                { this.mostrarContenidoTarea() }
            </div>
        );
    }
}

const mapStateToProps = ({tareasReducer}) => tareasReducer

export default connect(mapStateToProps, tareasAction)(Tareas);
