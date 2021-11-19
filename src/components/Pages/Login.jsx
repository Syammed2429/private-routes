import React from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
const Login = () => {

    const history = useHistory()
    const { handleLoginChange } = React.useContext(AuthContext)


    return (

        <>
            <div>
                <input
                    className="form-control container mt-3"
                    type="text"
                    placeholder="Enter Your Username" required />
                <input
                    className="form-control container my-2"
                    type="password"
                    placeholder="Enter Your Password" required />
                <button
                    className="form-control btn btn-success"
                    onClick={() => {
                        handleLoginChange()
                        history.push("/dashboard")
                    }}
                >Login</button>
            </div>

        </>
    )
}

export { Login }
