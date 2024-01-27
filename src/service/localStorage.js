import uuid from "react-uuid";

export const getPeliculas = ()=> {
    if(!localStorage["@films"]){
        localStorage["@films"]=JSON.stringify([]);
    }
    
    let film = JSON.parse(localStorage["@films"]);
    return film;
};

export const addFilm =(lasPeliculas)=>{
    const films = getPeliculas();
    films.push({id:uuid(),...lasPeliculas});
    localStorage["@films"]=JSON.stringify(films);
};

export const getPeliculaById =(id)=>{
    const peliculas = getPeliculas();
    const pelicula = peliculas.find((pelicula) => pelicula.id === id);
    return pelicula;
}