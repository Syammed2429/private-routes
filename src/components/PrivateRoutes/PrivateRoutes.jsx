import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


const PrivateRoutes = ({ path, children, push }) => {

    const { login } = React.useContext(AuthContext);

    if (!login) return <Redirect to='/login' push={true} />

    return <Route to={path}>{children}</Route>


}

export { PrivateRoutes }
