import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { idAnime } from "../../../redux/action"
import CardsPersonaje from "../../CardsPersonaje/CardsPersonaje"
import styled from './AnimesPersonajesId.module.css'
import {Link} from 'react-router-dom'
const AnimesPersonajesId=()=>{
const {id} = useParams()
    const animesPersonajes = useSelector(state=> state.animesId)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(idAnime(id)) 
},[id,dispatch])

console.log(animesPersonajes)
    return(
        <div>
            <h1>Personajes Del Anime {animesPersonajes.name}</h1>
            <Link to='/'>
            <button className={styled.buttonAnime}>
                <h3 className={styled.h3button}>
                    Animes
                </h3>
            </button>
            </Link>
            <div className={styled.container}>
            {animesPersonajes.personajes && animesPersonajes.personajes.map((personajes)=>{
return(
   
       <CardsPersonaje
       id={personajes.id}
       name={personajes.name}
       image={personajes.image}
       description={personajes.description}
       />
   
)
            })}
</div>
        </div>
    )
}


export default AnimesPersonajesId