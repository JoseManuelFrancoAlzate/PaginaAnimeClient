import styled from './CardPowers.module.css'

const CardPowers = ({id,name,description, image})=>{
return(
<div className={styled.card}>
<h3 className={styled.name}>{name}</h3>
<img className={styled.img} alt={id} src={image}/>
<h4 className={styled.description}>{description}</h4>
</div>
)
}



export default CardPowers