import React from 'react'
import { AuthContext } from '../../contexts/AuthContext'



const Dashboard = () => {

    const { login, handleLoginChange } = React.useContext(AuthContext)

    return (
        <>
            <div className="text-warning mt-3">
                <h1>Welcome to the Dashboard</h1>
                <button
                    className="btn btn-danger"
                    onClick={() =>
                        handleLoginChange()
                    }
                >{login ? 'Logout' : 'Login'}</button>
            </div>
        </>
    )
}

export { Dashboard }
