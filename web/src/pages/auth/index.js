import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, register } from '../../redux/user'

import { useState } from 'react'

function LoginDoctor(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault()
        //await dispatch(login({ email, password }))
        history.push('/')
        if(email == "doctor@gmail.com" && password == "doctor")
        {
            props.onChange(1);
        }
        else{
            alert("bad email or password");
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="text-center offset-md-4 col-md-4">
                    <h2>Please login with your doctor credentials</h2>
                    <form onSubmit={onSubmit}>
                        <input
                            placeholder="your@email.com"
                            type="text"
                            value={email}
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="p@ssw0rd!"
                            type="password"
                            value={password}
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="form-control">
                            Login
                        </button>
                    </form>
                    <p>
                        or <Link to="/register">register</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

function LoginUser(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const dispatch = useDispatch()


    const onSubmit = async (e) => {
        e.preventDefault()
        //await dispatch(login({ email, password }))
        history.push('/')

        //if(email == "user@gmail.com" && password == "user")
        //{
            props.onChange(2);
        //}
        //else{
           // alert("bad email or password");
        //}
    }

    return (
        <div className="container">
            <div className="row">
                <div className="text-center offset-md-4 col-md-4">
                    <h2>Please log in with your user credentials</h2>
                    <form onSubmit={onSubmit}>
                        <input
                            placeholder="your@email.com"
                            type="text"
                            value={email}
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="p@ssw0rd!"
                            type="password"
                            value={password}
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="form-control">
                            Login
                        </button>
                    </form>
                    <p>
                        or <Link to="/register">register</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(register({ name, email, password }))
        history.push('/')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="text-center offset-md-4 col-md-4">
                    <h2>Let's do better together</h2>
                    <p>Achieve zero waste today</p>
                    <form onSubmit={onSubmit}>
                        <input
                            placeholder="John Smith"
                            type="text"
                            value={name}
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            placeholder="your@email.com"
                            type="text"
                            value={email}
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="p@ssw0rd!"
                            type="password"
                            value={password}
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="form-control">
                            Register
                        </button>
                    </form>
                    <p>
                        or <Link to="/login">login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}



export { LoginDoctor, LoginUser, Register }
