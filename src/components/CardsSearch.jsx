import React from 'react';
import useCards from '../hooks/useCards';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const SearchResultComponent = () => {
    const { inputValues } = useCards();
    const navigate = useNavigate();

    return (
    <div>
        <h2>Resultados de la búsqueda:</h2>
        {inputValues.map((pelicula)=>(
                <Col xs={6} md={4} className='mb-3'>
                    <Card>
                        <Card.Img variant="top"
                                    onClick={()=>navigate(`/view-pelicula/${id}`)}
                                    src={pelicula.urlImage}
                                    style={{cursor: 'pointer'}}/>
                        <Card.Body>
                            <Card.Title>{pelicula.titulo}</Card.Title>
                            <Card.Text>
                            {pelicula.descripcion}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
    </div>
    );
};

export default SearchResultComponent;