import React, { useState } from 'react';
import './Home.css';
import Login  from './Login/Login';
import CardsAnime from './CardsAnime/CardsAnime';
const Home = ({setIsLoggedIn, isLoggedIn}) => {
  const [bolean, setBolean] = useState(true);
  const [color, setColor] = useState('yellow');
  const [top, setTop] = useState('50px');

  const mover = () => {
    setBolean(!bolean);
    if (bolean) {
      setColor('black');
      setTop('100px');
    } else { 
      setColor('yellow');
      setTop('200px');
    }
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 40) {
      mover();
    }
  };


  return (
    <center>
      {
        !isLoggedIn ? (
      <div
        className='fondo'
        tabIndex="0"
        onKeyDown={handleKeyPress}
        style={{
          width: '100vw', /* Ajusta el ancho al 100% del viewport width */
          height: '100vh', /* Ajusta la altura al 100% del viewport height */
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative', /* Añade una posición relativa */
        }}
      >
        <h1
          className="titulo"
          style={{
            color: color,
            position: 'absolute',
            top: top,
            left: '50%', /* Centra horizontalmente el título */
            transform: 'translateX(-50%)', /* Centra horizontalmente el título */
            backgroundColor: 'red',
            padding: '10px',
          }}
        >
          BIENVENIDO
        </h1>
        <Login setIsLoggedIn={setIsLoggedIn} />
      </div>) :(
      <div>
      <CardsAnime setIsLoggedIn={setIsLoggedIn} />
      </div>)}
    </center>
 
  );
};

export default Home;
