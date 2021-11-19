import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Dashboard } from '../PrivateRoutes/Dashboard'
import { PrivateRoutes } from '../PrivateRoutes/PrivateRoutes'
import { Settings } from '../PrivateRoutes/Settings'
import { Home } from './Home'
import { Login } from './Login'

const Routes = () => {
    return (
        <>
            {/* Links */}
            <div
                style={{
                    display: 'flex',
                    gap: "20px",
                    fontSize: "25px",
                }}
            >
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/dashboard/settings">Settings</Link>
            </div>

            {/* Routes */}
            <div>
                <Switch>

                    <Route exact path="/" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <PrivateRoutes exact path="/dashboard" >
                        <Dashboard />
                    </PrivateRoutes>
                    <PrivateRoutes path="/dashboard/settings" >
                        <Settings />
                    </PrivateRoutes>
                </Switch>
            </div>
        </>
    )
}

export { Routes }
