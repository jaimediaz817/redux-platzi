
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Usuarios from './usuarios/Usuarios';
import Menu from './Menu';
import './App.css';
import Publicaciones from './Publicaciones/Publicaciones';
import Tareas from './Tareas';
import TareasGuardar from './Tareas/GuardarTarea';

// const Tareas = () => (
// 	<div className="j-container container">
// 		<div className="col-12">
// 		Tareas works
// 		</div>
// 	</div>
// );

const App = () => {

  return(
	<BrowserRouter>
		<Menu />
		<Switch>
			<Route exact path='/' component={ Usuarios }></Route>
			<Route exact path='/tareas' component={ Tareas }></Route>
			<Route exact path='/publicaciones/:key' component={ Publicaciones }></Route>
			<Route exact path='/tareas/guardar' component={ TareasGuardar }></Route>
			<Route exact path='/tareas/guardar/:usua_id/:tarea_id' component={ TareasGuardar }></Route>
		</Switch>		
	</BrowserRouter>
  );
}

export default App;