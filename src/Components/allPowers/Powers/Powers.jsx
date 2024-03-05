import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allPowers } from "../../../redux/action"
import CardPowers from "../CardPowers/CardPowers"
import styled from './Powers.module.css'
import {Link} from 'react-router-dom'

const Powers = ()=>{

const powers = useSelector(state => state.allPowers)

const dispatch = useDispatch()

useEffect(()=>{
    dispatch(allPowers())
},[dispatch])

console.log(powers)

    return(
        <div>
        <h1>Todos Los Poderes</h1>
        <Link to='/'>
            <button className={styled.buttonAnime}>
                <h3 className={styled.h3button}>
                    Animes
                </h3>
            </button>
            </Link>
        <div className={styled.container}>
        {
            powers.map((powers)=>{
return(
  <CardPowers
  id={powers.id}
  name={powers.name}
  image={powers.image}
  description={powers.description}/>
)
            })
        }
        </div>
        </div>
    )
}


export default Powers