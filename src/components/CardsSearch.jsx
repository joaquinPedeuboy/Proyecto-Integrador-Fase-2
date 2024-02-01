import React from 'react';
import useCards from '../hooks/useCards';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';

const SearchResultComponent = () => {
    const { titulo } = useParams();
    const navigate = useNavigate();

    const {inputValues, setDataForm}=useCards();

    useEffect(()=>{
        if(titulo){
            const pelicula = buscarPeliculas(titulo);
            setDataForm(pelicula);
        }
    },[titulo])

    return (
    <div>
        <h2>Resultados de la búsqueda:</h2>
                <Col xs={6} md={4} className='mb-3'>
                    <Card>
                        <Card.Img variant="top"
                                    onClick={()=>navigate(`/view-pelicula/${id}`)}
                                    src={inputValues.urlImage}
                                    style={{cursor: 'pointer'}}/>
                        <Card.Body>
                            <Card.Title>{inputValues.titulo}</Card.Title>
                            <Card.Text>
                            {inputValues.descripcion}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
    </div>
    );
};

export default SearchResultComponent;