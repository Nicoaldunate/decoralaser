import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import datos from '../data';
import axios from 'axios';

function HomeScreen() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/productos');
      setProductos(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Productos</h1>
      <div className='productos'>
        {productos.map((producto) => (
          <div className='producto' key={producto.slug}>
            <Link to={`/producto/${producto.slug}`}>
              <img src={producto.imagen1} alt={producto.nombre} />
            </Link>
            <div className='info_productos'>
              <Link to={`/producto/${producto.slug}`}>
                <p>{producto.nombre}</p>
              </Link>
              <p>
                <strong>${producto.precio}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
