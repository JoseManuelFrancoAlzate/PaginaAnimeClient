import styled from './Register.module.css'
import {Link} from 'react-router-dom'
import React, { useState} from 'react'
import {useDispatch} from 'react-redux'
import { postRegister } from '../../redux/action'


const Register = ()=>{


    const dispatch = useDispatch()

    const [users, setUsers] = useState({
        name:"",
        email:"",
        password:""
    })


    let handleChange = (e)=>{
        setUsers({
            ...users,
[e.target.name] : e.target.value
        })
    }



    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(postRegister(users))
    }

return(
    <div className={styled.div}>
        <form onSubmit={handleSubmit} className={styled.form}>
            <p>
                <input 
                type="text"
                value={users.name}
                name="name"
                onChange={handleChange}
                className={styled.input} 
                required
                placeHolder='escribe tu nombre'/>
            </p>
            <p>
<input 
type="text"
value={users.email}
name="email"
onChange={handleChange}
className={styled.input} 
required
placeHolder="escribe tu email"/>
            </p>
            <p>
<input 
type="text"
value={users.password}
name="password"
onChange={handleChange}
className={styled.input} 
required
placeHolder="escribe tu coreaseña"/>
            </p>
            <button type="submit" className={styled.button}>Registrarse</button>
        </form>
<Link to='/'>
        <button className={styled.button2}>
            Volver a la pestaña de inicio
        </button>
        </Link>
    </div>
)
}

export default Register 