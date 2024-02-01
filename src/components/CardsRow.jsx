import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useCards from '../hooks/useCards';
import CardsPeliculas from './CardsPeliculas';
import { getPeliculas } from '../service/localStorage';
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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

    useEffect(() => {
        // const searchUrl = search ? "/search/movie?query=" + search : '/';
        setPeliculas(getPeliculas());
    },[]);

    return (
        <>
        <InfiniteScroll dataLength={peliculas.length}
                        next={loadMoreMovies}
                        hasMore={hasMore}
                        loader = {<h4> Cargando... </h4>}
                        style={{ overflowX: 'hidden' }}>
            <Row>
                {peliculas.map(lasPeliculas=> <CardsPeliculas lasPeliculas={lasPeliculas} key={lasPeliculas.id}/>
                )}
            </Row>
        </InfiniteScroll>
        
        </>
    );
}