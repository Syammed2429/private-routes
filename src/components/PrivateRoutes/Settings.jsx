import React from 'react'
import { AuthContext } from '../../contexts/AuthContext'


const Settings = () => {

    const { login, handleLoginChange } = React.useContext(AuthContext)

    return (
        <>
            <div className="text-secondary mt-4">
                <h1>Setting</h1>
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

export { Settings }
