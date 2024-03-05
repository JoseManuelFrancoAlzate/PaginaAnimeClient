import styled from './CardsPersonaje.module.css'
import {Link} from 'react-router-dom'

const CardsPersonaje =({id,name,image, description})=>{
    return(
<div className={styled.card}>
<center>
    <Link to={`/powers/${id}`} key={id}>
    <h1 className={styled.name}>{name}</h1>
    <img  className={styled.img}alt={name} src={image}/>
    <h4 className={styled.description}>{description}</h4>

    </Link>
    </center> 
</div>
    )
}



export default CardsPersonaje