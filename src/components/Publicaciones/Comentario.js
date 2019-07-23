import React from 'react'
import Spinner from '../helpers/Spinner';
import Fatal from '../general/Fatal';
import '../general/Fatal.css';
import {connect} from 'react-redux';

const Comentario = (props) => {

    if (props.comentarioError){
        return <Fatal mensaje={ props.comentarioError } />
    }

    if (props.commentarioLoading && !props.comentarios.length){
        return <Spinner />
    }

    const ponerComentarios = () => (
        props.comentarios.map((comentario) =>(
            <li>
                <b>
                    <u>{ comentario.email }</u>                    
                </b>
                <br />
                { comentario.body }
            </li>
        ))
    );

    return (
        <ul>
            { ponerComentarios() }
        </ul>
    )
}

const mapStateToProps = ({ publicacionesReducer}) => publicacionesReducer

export default connect(mapStateToProps)(Comentario)
