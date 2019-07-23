import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const TablaUsers = (props) => {

    const contenidoFilasTabla = () => (
        props.usuarios.map((user, key) => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.website}</td>
                <td>{user.email}</td>
                <td className="text-center">
                    <Link to={ `/publicaciones/${key}` }>
                        <i className="far fa-eye"></i>
                    </Link>
                </td>
            </tr>
        )) 
    );

    return (
        <div>
            <table className="table table-inverse mt-4">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Website</th>
                        <th>Email</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { contenidoFilasTabla() }
                </tbody>
            </table>      
        </div>
    )
}

const mapStateToProps = (reducers) => {
    return reducers.usuariosReducer;
}

export default connect(mapStateToProps)(TablaUsers)
