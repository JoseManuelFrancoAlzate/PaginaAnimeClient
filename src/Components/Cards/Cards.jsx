import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = ({ id, name, img, description }) => {
  return ( 
    <div className='card'>
      <center>
        <Link to={`/personajes/${id}`} key={id}>
          <h1 className='name'>{name}</h1>
          <img className='img' alt={name} src={img}/>
          <h1 className="description">{description}</h1>
        </Link>
      </center>
    </div>
  );
};

export default Cards;
