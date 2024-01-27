import { useNavigate, useParams } from "react-router-dom"
import { Container,Button, Card } from "react-bootstrap";
import useCards from '../hooks/useCards';
import { useEffect } from 'react';
import { getPeliculaById } from '../service/localStorage';

export default function CardsDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const {inputValues, setDataForm}=useCards();

    useEffect(()=>{
        if(id){
            const pelicula = getPeliculaById(id);
            setDataForm(pelicula);
        }
    },[id])

    return(

        <Container className="d-flex justify-content-center">
            <Card className="w-50 mb-5">
                <Card.Img variant="top" src={inputValues.urlImage} />
                    <Card.Body>
                        <Card.Title>{inputValues.titulo}</Card.Title>
                        <Card.Text>
                        {inputValues.descripcion}
                        </Card.Text>
                        <Button variant="secondary" 
                                onClick={()=>navigate("/")}>
                            volver
                        </Button>
                    </Card.Body>
            </Card>
        </Container>
    )
}

