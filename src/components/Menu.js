import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse container" id="navbar-list-2">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <u className="nav-link logo-container">
                            <span>Task</span>
                            <i class="icon-logo fas fa-thumbtack"></i>
                            <i className="second">Manager</i>
                        </u>                        
                    </li>                    
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Usuarios <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tareas">Tareas</Link>
                    </li>
                </ul>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" target="_blank" href="https://ingjaimediaz.com">Desarrollado por: <strong>
                        <i class="fas fa-user-shield pl-2 pr-2"></i> Ing. Jaime Díaz.</strong></a>
                    </li>                
                </ul>
            </div>
      </nav>
    );

}

export default Menu;