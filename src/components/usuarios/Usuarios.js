import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import  * as traerTodos   from '../../actions/usuariosActions';
import Spinner from '../helpers/Spinner';
import '@fortawesome/fontawesome-free/css/all.css'

import TablaUsers from './TablaUsers';
import '../general/Fatal';
import Fatal from '../general/Fatal';

class Usuarios extends Component {

  constructor() {
    super();

    this.state = {
      usuarios: []
    }
  }

  componentDidMount (){
    if (!this.props.usuarios.length) {
      this.props.traerTodosLosUsuarios();
    }    
  }

  ponerContenidoTabla = () => {

    if (this.props.loading) {
      return (
        <Spinner />
      );
    }

    if (this.props.error) {
      return <Fatal mensaje={this.props.error} />;
    }


    return <TablaUsers />
  }

  render() {

    console.log("props ::: ", this.props)

    return (
      <div className="j-container container">
        <h1>Lista de Usuarios</h1>
        { this.ponerContenidoTabla() }
      </div>
    );    
  }
}

const mapStateToProps = (reducers) => {
    return reducers.usuariosReducer
}

export default connect(mapStateToProps,  traerTodos )(Usuarios);