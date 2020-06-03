import React, { Component, useState } from 'react';
import Logo from '../p.png'
import './register.css'
import Axios from 'axios'

const Register = (props) => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:5000/user/signup', {
            name, email, password
        })
        .then((res) => {
            sessionStorage.setItem('token', res.data.token)
            Axios.get("http://localhost:5000/user/me", {
                headers: {
                    token: res.data.token
                }
            })
            .then((res) => {
                const user = {
                    name: res.data.name,
                    id: res.data._id
                }
                props.user.setUser(user)
                console.log(props)
            })
            props.history.push('/editor')
        })
        .catch((err) => {
            setErrors(err.response.data.errors)        
        })
    }
    return ( 
        <form>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-4">
                            <img src={Logo} style={{width: '200px', height: '200px'}}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    </div>
                    <div  className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                    </div>
                    <button style={{float: 'right'}}type="submit" className="btn btn-success" onClick={(e) => handleSubmit(e)}>Register</button>
                    <h6 onClick={()=> {props.history.push('/login')}}>Already have an account? Login</h6>
                    {errors ? ( 
                            <div style={{marginTop: '20px'}}>
                                {
                                    errors.map((error) => (<p key={error.msg} style={{color: 'red'}}>{error.msg}</p>))
                                }
                            </div>
                        ): null
                    }
                </div>
            </div>
            
        </form>
     );
}
 
export default Register;