import {getAnime} from "../../redux/action"
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react"
import './CardsAnime.css'
import Cards from "../Cards/Cards"
import {Link} from 'react-router-dom'
const CardsAnime=({setIsLoggedIn})=>{
const animes = useSelector(state=> state.animes)

    const dispatch = useDispatch()

    console.log(animes)
    
   useEffect(()=>{
    dispatch(getAnime())
   },[dispatch])

   const handleLogout = ()=>{
setIsLoggedIn(false)
   }
   
    return(
        <div>
            <h1>Animes</h1>
            <Link to='/personajes'>
            <button className="buttonpe">
                <h3 className='h3button'>
                Todos los personajes
                </h3>
            </button>
            </Link>
            <Link to='/powers'>
            <button className="buttonpo">
            <h3 className='h3button'>
                Todos los poderes
                </h3>            
                </button>
                </Link>
                <button onClick={handleLogout}className="cerrarButton">
            <h3 className='h3buttonC'>
cerrar sesion
                </h3>            
                </button>
<div className="container">
            {
animes  && animes.map((elemento)=>{
    return(
<Cards id={elemento.id} name={elemento.name} img={elemento.image} description={elemento.description}/>
    )
})

            }
            </div>
        </div>

    )
}


export default CardsAnime






/*
{
    "name":"dragon ball",
    "description": "Kame hame ha",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Dragon_Ball_Z_Logo_A.png",
    "personaje":"1"
    }
    
   {
"name":"naruto",
"description": "Ninja de la aldea",
"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/640px-Naruto_logo.svg.png"
	
},
   {
"name":"One Piece",
"description": "Ser el rey de los piratas",
"image": "https://c3.klipartz.com/pngpicture/614/642/sticker-png-logo-one-piece-one-piece-label.png"
	
}

       {
"name":"Bleach",
"description": "Cazar hollows",
"image": "https://w7.pngwing.com/pngs/546/745/png-transparent-logo-bleach-symbol-brand-manga-bleach-template-text-manga.png"
	
}

    */