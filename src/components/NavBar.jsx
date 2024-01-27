import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCards from '../hooks/useCards';
import { addFilm, getPeliculas } from '../service/localStorage';


export default function NavBar() {

  const {inputValues, buscarPeliculas }=useCards([{
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
      descripcion:"Los vengadores de marvel"
  },
  {
      urlImage:"../img/StarWars-Episodio-VI.jpg",
      titulo:"Star Wars Episodio VI",
      descripcion:"Los vengadores de marvel"
  },
  {
      urlImage:"../img/The-Godfather.jpg",
      titulo:"El Padrino",
      descripcion:"Los vengadores de marvel"
  },
  {
      urlImage:"../img/Tiburon.jpg",
      titulo:"Tiburon",
      descripcion:"Los vengadores de marvel"
  }]
);

const navigate = useNavigate();

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
    navigate(`/buscar-pelicula/${inputValues.titulo}`);
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
              type="search"
              placeholder="Pelicula"
              className="me-2"
              aria-label="Search"
              value={inputValues.titulo}
              onChange={buscarPeliculas}

            />
            <Button variant="outline-success"
                    type='submit'>
                      Buscar
            </Button>{' '}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

