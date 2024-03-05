const {GET_ANIME, ID_ANIME, ALL_POWERS, ALL_PERSONAJES, ID_PERSONAJES, POST_REGISTER, POST_LOGIN} = require('./action')


const initialState={
    animes:[],
    animesId:[],
    allPowers: [],
    allPersonajes: [],
    personajesId: [],
    users:[],
    usersLogin:[]
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
case GET_ANIME:
    return {
    ...state,
animes: action.payload
}
case ID_ANIME:
    return{
        ...state,
        animesId: action.payload
    }

    case ALL_POWERS:
       return {
            ...state,
allPowers: action.payload
        }
case ALL_PERSONAJES:
    return{
        ...state,
allPersonajes: action.payload
    }
    case ID_PERSONAJES:
        return{
            ...state,
            personajesId: action.payload
        }

case POST_REGISTER:
    return{
        ...state,
        users: [...state.users, action.payload]
    }

    case POST_LOGIN:
        return{
            ...state,
            usersLogin: action.payload
        }
default:
    return{...state}
    }
}
 

export default rootReducer