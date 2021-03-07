import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import _ from 'lodash'

import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../redux/user'

import Home from './home'
import { Login, Register } from './auth'
import Dash from './dash'
import Setup from './setup'
import About from './about'

import { Navbar as BSNavbar, Nav } from 'react-bootstrap'

function NavbarLink(props: any) {
    return (
        <li className="nav-item">
            <Link to={props.to} className="nav-link" onClick={props.onClick}>
                {props.children || ''}
            </Link>
        </li>
    )
}

function Navbar(props: any) {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    return (
        <BSNavbar expand="lg">
            <Link to="/" className="navbar-brand">
                Iago
            </Link>
            <BSNavbar.Toggle aria-controls="navbar-nav" />

            <BSNavbar.Collapse id="navbar-nav">
                {_.isEmpty(user) === true ? (
                    <>
                        <Nav className="mr-auto">
                            <NavbarLink to="/about">About</NavbarLink>
                            <NavbarLink to="/projects">Product</NavbarLink>
                            <NavbarLink to={{ pathname: '/', hash: 'contact' }}>
                                Contact
                            </NavbarLink>
                        </Nav>
                        <Nav>
                            <NavbarLink to="/login">Login</NavbarLink>
                        </Nav>
                    </>
                ) : (
                    <>
                        <Nav className="mr-auto">
                            <NavbarLink to="/">Dashboard</NavbarLink>
                            <NavbarLink to="/learn">Learn</NavbarLink>
                            <NavbarLink to="/profile">Profile</NavbarLink>
                            <NavbarLink to="/setup">Setup Device</NavbarLink>
                        </Nav>
                        <Nav>
                            <NavbarLink
                                to="/"
                                onClick={(e) => {
                                    e.preventDefault()
                                    dispatch(logout())
                                }}
                            >
                                Logout
                            </NavbarLink>
                        </Nav>
                    </>
                )}
            </BSNavbar.Collapse>
        </BSNavbar>
    )
}

function App() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(login({}))
    }, [])

    return (
        <Router>
            <Navbar />
            {_.isEmpty(user) === true ? (
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            ) : (
                <Switch>
                    <Route exact path="/">
                        <Dash />
                    </Route>
                    <Route exact path="/setup">
                        <Setup />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            )}
        </Router>
    )
}

export default App
