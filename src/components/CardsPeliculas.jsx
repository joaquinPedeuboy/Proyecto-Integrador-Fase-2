import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

export default function CardsPeliculas({lasPeliculas}) {
  const {id,urlImage,titulo,descripcion}=lasPeliculas;
  const navigate = useNavigate();


  return (

      <Col xs={6} md={4} className='mb-3'>
            <Card>
              <Card.Img variant="top"
                        onClick={()=>navigate(`/view-pelicula/${id}`)}
                        src={urlImage}
                        style={{cursor: 'pointer'}}/>
              <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                  {descripcion}
                </Card.Text>
              </Card.Body>
            </Card>
      </Col>
  );
}
