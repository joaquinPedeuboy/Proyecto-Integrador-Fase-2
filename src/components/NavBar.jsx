import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from 'react-router-dom';
import { useEffect } from 'react';
import useCards from '../hooks/useCards';
import { addFilm, getFilm, getPeliculas } from '../service/localStorage';
import { FaSearch } from "react-icons/fa";

// function useQuery(){
//   return new URLSearchParams(useLocation().search);
// }

export default function NavBar() {

  const {inputValues, handleInputForm}=useCards([{
    urlImage:"../img/Los-Vengadores-EndGame.jpg",
    titulo:"Los Vengadores End Game",
    descripcion:"Los vengadores de marvel"
  },
  {
      urlImage:"../img/StarWars-Episodio-IV.jpg",
      titulo:"Star Wars Episodio IV",
      descripcion:"Una nueva esperanza"
  },
  {
      urlImage:"../img/StarWars-Episodio-V.jpg",
      titulo:"Star Wars Episodio V",
      descripcion:"El Imperio Contrataca"
  },
  {
      urlImage:"../img/StarWars-Episodio-VI.jpg",
      titulo:"Star Wars Episodio VI",
      descripcion:"El retorno del Jedi"
  },
  {
      urlImage:"../img/The-Godfather.jpg",
      titulo:"El Padrino",
      descripcion:"El padriono Parte 1"
  },
  {
      urlImage:"../img/Tiburon.jpg",
      titulo:"Tiburon",
      descripcion:"Shark"
  }]
);

  // const query = useQuery();
  // const search = query.get("search");


  useEffect(() => {
    // Verifica si ya hay películas en el almacenamiento local
    const storedFilms = getPeliculas();
    // Si no hay películas, entonces agrega las películas de inputValues
    if (storedFilms.length === 0) {
      for (const film of inputValues) {
        addFilm(film);
      }
    }
    // Como segundo parámetro, pasa un array vacío para que el efecto se ejecute solo una vez
  }, []);


    const handleSubmit = (e)=> {
      e.preventDefault();
      getFilm(inputValues);
    }
  

    return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary border border-0 mb-5" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{fontSize: '50px', marginLeft: '30px'}}>Peliculas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
          >
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              placeholder="Pelicula"
              className="me-2"
              value={inputValues.titulo}
              onChange={handleInputForm}
            />
            <Button variant="outline-success"
                    type='submit'>
                    <FaSearch size={20}/>
            </Button>{' '}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

