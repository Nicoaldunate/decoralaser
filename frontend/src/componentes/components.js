import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Producto(props) {
  const { producto } = props;
  return (
    <Card>
      <Link to={`/producto/${producto.slug}`}>
        <img
          src={producto.imagen1}
          className='card-img-top'
          alt={producto.nombre}
        />
      </Link>
      <Card.Body>
        <Link to={`/producto/${producto.slug}`}>
          <Card.Title>{producto.nombre}</Card.Title>
        </Link>
        <Card.Text>${producto.precio}</Card.Text>
        <Button>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
export default Producto;
