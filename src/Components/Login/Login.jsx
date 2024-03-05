import { Link } from "react-router-dom";
import styled from "./Login.module.css";
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { postLogin } from "../../redux/action";



const Login = ({setIsLoggedIn}) => {
  const stateUser = useSelector(state => state.usersLogin);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Antes de dispatch(postLogin)");
      await dispatch(postLogin(user));
      console.log("Después de dispatch(postLogin)");
  
      console.log("Nuevo estado de stateUser:", stateUser);
  
      if (stateUser.user && stateUser.user.email === user.email && stateUser.password === user.password) {
        console.log("Inicio de sesión exitoso");
        setIsLoggedIn(true);
      } else {
        console.log("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      // Manejar errores de inicio de sesión, si es necesario
    }
  };
  

  console.log(stateUser)
  console.log(user)
  return (
    <center>
      <div>
        <form onSubmit={handleSubmit} className={styled.container}>
          <p>
            <input
              type="text"
              value={user.email}
              name="email"
              onChange={handleChange}
              placeholder="Ingresa tu usuario"
              required
              className={styled.input} />
          </p>
          <input
            type="password"
            value={user.password}
            onChange={handleChange}
            name="password"
            placeholder="Ingresa tu contraseña:"
            required
            className={styled.input} />
          <p>
            <button className={styled.button}>Iniciar sesión</button>
          </p>
        </form>

        <h3 className={styled.h3}>¿No tienes una cuenta?</h3>
        <Link to='/register'>
          <button  className={styled.buttonRegister}>
            Haz click aquí para registrarte
          </button>
        </Link>
      </div>
    </center>
  );
};

export default Login;
