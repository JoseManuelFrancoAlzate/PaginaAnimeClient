import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { idPersonajes } from "../../../redux/action"
import styled from './PersonajesPowersId.module.css'
import CardPowers from "../../allPowers/CardPowers/CardPowers"
import {Link} from 'react-router-dom'

const PersonajesPowersId = ()=>{
    const {id} = useParams()
    const personajePowers = useSelector(state=> state.personajesId)
const dispatch = useDispatch()

useEffect(()=>{
    dispatch(idPersonajes(id)) 
},[dispatch])

console.log(personajePowers)

    return(
<div>
    <h1>Poderes de {personajePowers.name}</h1>
    <Link to='/personajes'>
            <button className={styled.buttonPersonajes}>
                <h3 className={styled.h3button}>
                    Personajes
                </h3>
            </button>
            </Link>
    <div className={styled.container}>
    {
        personajePowers.powers &&  personajePowers.powers.map((powers)=>{
return(
    <CardPowers
    id={powers.id}
    name={powers.name}
    image={powers.image}
    description={powers.description}
    />
)
        })
    }
    </div>
</div>
    )
}

export default PersonajesPowersId