import React from 'react';
import useCards from '../hooks/useCards';
import { FaSearch } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function CardsSearch ({search}){
    const {inputValues,handleInputForm}=useCards();

    const handleSubmit = (e)=> {
        e.preventDefault();
        search(inputValues.titulo);
    }

    return (
        <div className='mb-3'>
            <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                type="text"
                placeholder="Pelicula"
                className="me-2"
                name="titulo"
                value={inputValues.titulo}
                onChange={handleInputForm}
                />
                <Button variant="outline-success"
                        type='submit'>
                        <FaSearch size={20}/>
                </Button>{' '}
            </Form>
        </div>
        
    );
};