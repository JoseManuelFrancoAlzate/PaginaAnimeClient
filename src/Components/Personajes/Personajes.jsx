import {allPersonajes} from "../../redux/action"
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react"
import CardsPersonaje from "../CardsPersonaje/CardsPersonaje"
import {Link} from 'react-router-dom'
import styled from './Personajes.module.css'
const Personajes = ()=>{
    const personajes = useSelector(state => state.allPersonajes)
    const dispatch = useDispatch()
    useEffect(()=>{
dispatch(allPersonajes())
    },[dispatch])

console.log(personajes)
    return(
        <div>
            <h1>Personajes</h1>
            <Link to='/'>
            <button className={styled.buttonAnime}>
                <h3 className={styled.h3button}>
                    Animes
                </h3>
            </button>
            </Link>
            <div className="container">
            {
             personajes && personajes.map((personajes)=>{
                    return(
                        <CardsPersonaje 
                        id={personajes.id}
                        name={personajes.name}
                        image={personajes.image}
                        description={personajes.description}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}



export default Personajes


//si anime.id es igual a el id

/*
{
"name": "Naruto",
"power":"Rasengan",
"image":"https://static.wikia.nocookie.net/naruto/images/1/12/La_Promesa_de_Naruto.png/revision/latest?cb=20110825232746&path-prefix=es"
},
*/ 


//Le doy click a la card la cual me llevara a otro link
//Segun la card seleccionada debe de mostrarme los personajes que suelen habitar en aquella card
//esto se definira por medio del Id de la card seleccionada.


