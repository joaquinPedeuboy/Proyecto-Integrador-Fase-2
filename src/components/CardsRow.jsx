import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CardsPeliculas from './CardsPeliculas';
import { getPeliculas } from '../service/localStorage';
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import CardsSearch from "./CardsSearch";
import { getFilm } from '../service/localStorage';

export default function CardsRow() {
    const [peliculas, setPeliculas]=useState([]);
    const [hasMore, setHasMore] = useState(true);

    const loadMoreMovies = () => {
        try {
        const newMovies = getPeliculas();
        if (newMovies.length === 0) {
            setHasMore(false);
        } else {
            setPeliculas((prevMovies) => [...prevMovies, ...newMovies]);
        }
        } catch (error) {
        console.error('Error al cargar más películas', error);
        }
    };

    const handleSearch = (titulo) => {
        try {
            const filteredMovies = getFilm(titulo);
            setPeliculas(filteredMovies);
        } catch (error) {
            console.error('Error al buscar películas', error);
        }
    };

    useEffect(() => {
        setPeliculas(getPeliculas());
    },[]);

    return (
        <>
        <CardsSearch search={handleSearch} />
        <InfiniteScroll dataLength={peliculas.length}
                        next={loadMoreMovies}
                        hasMore={hasMore}
                        loader = {<h4> Cargando... </h4>}
                        style={{ overflowX: 'hidden' }}>
            <Row>
                {peliculas.map(lasPeliculas=> <CardsPeliculas lasPeliculas={lasPeliculas} key={lasPeliculas.id} setPeliculas={setPeliculas}/>
                )}
            </Row>
        </InfiniteScroll>
        
        </>
    );
}