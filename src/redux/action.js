import axios from "axios";

// Definir constantes para las acciones
export const GET_ANIME = "GET_ANIME";
export const ID_ANIME = "ID_ANIME";
export const ALL_POWERS = "ALL_POWERS"
export const ALL_PERSONAJES = 'ALL_PERSONAJES'
export const ID_PERSONAJES="ID_PERSONAJES"
export const POST_REGISTER = "POST_REGISTER"
export const POST_LOGIN = "POST_LOGIN"
// Definir constantes para las URL

const BASE_URL = "/anime";
const ID_URL = "/anime";
const URL_POWERS = "/power"
const URL_PERSONAJE = '/personaje'
const ID_URL_PERSONAJES = '/personaje'
const REGISTER = "/users/register"
const LOGIN="/users/login"
// Acción para obtener todos los anime
export const getAnime = () => {
  return async function (dispatch) {
    try {
      const animeData = await axios.get(BASE_URL);
      const anime = animeData.data;
      dispatch({ type: GET_ANIME, payload: anime });
    } catch (error) {
      // Manejo de errores
      console.error("Error al obtener anime:", error);
      // Aquí podrías tomar medidas adicionales, como mostrar un mensaje al usuario
    }
  };
};

// Acción para obtener un anime por ID
export const idAnime = (id) => {
  return async function (dispatch) {
    try {
      const animeData = await axios.get(`${ID_URL}/${id}`);
      const anime = animeData.data;
      dispatch({ type: ID_ANIME, payload: anime });
    } catch (error) {
      // Manejo de errores
      console.error("Error al obtener anime por ID:", error);
      // Aquí podrías tomar medidas adicionales, como mostrar un mensaje al usuario
    }
  };
};

export const allPersonajes=()=>{
  return async function(dispatch){
    try {
      const personajesData = (await axios.get(`${URL_PERSONAJE}`))
      const dataPersonajes = personajesData.data
      dispatch({type: ALL_PERSONAJES, payload: dataPersonajes})
    } catch (error) {
      console.log('No se encontraron personajes', error)
    }
  }
}


export const allPowers=()=>{
return async function(dispatch){
  try {
    const powersData = (await axios.get(`${URL_POWERS}`))
    const dataPowers = powersData.data
    dispatch({type: ALL_POWERS, payload: dataPowers})
  } catch (error) {
    console.log('No se encuentran los poderes', error)
  }
}
}

export const idPersonajes = (id) => {
  return async function (dispatch) {
    try {
      const personajeData = await axios.get(`${ID_URL_PERSONAJES}/${id}`);
      const dataPersonaje = personajeData.data;
      dispatch({ type: ID_PERSONAJES, payload: dataPersonaje });
    } catch (error) {
      // Manejo de errores
      console.error("Error al obtener personaje por ID:", error);
      // Aquí podrías tomar medidas adicionales, como mostrar un mensaje al usuario
    }
  };
};

export const postRegister = (newUser)=>{
return async function(dispatch){
  try {
    const response = await axios.post(`${REGISTER}`, newUser).data
alert('USUARIO CREADO')
return dispatch({ type: POST_REGISTER, payload: response})
  } catch (error) {
    alert('NO SE CREO USUARIO', error)
  }
}
}

export const postLogin = (loginUser) => {
  return async function(dispatch) {
    try {
      const response = await axios.post(`${LOGIN}`, loginUser);
      const logueado = response.data;
      alert('USUARIO LOGUEADO');
      return dispatch({ type: POST_LOGIN, payload: logueado });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Usuario o contraseña incorrectos');
      } else {
        alert('Error al intentar iniciar sesión');
      }
    }
  };
};

export default getAnime