import { useState } from "react";
import { getPeliculas } from "../service/localStorage";

export default function useCards(lasPeliculas=[]) {
    const [inputValues, setFields] = useState(lasPeliculas);

    const buscarPeliculas = (e) =>{
        const { value } = e.target;

        const peliculasFiltradas = getPeliculas().filter((pelicula) =>
            pelicula.titulo.toLowerCase().includes(value.toLowerCase())
        );
            setFields(peliculasFiltradas);
    };

    const setDataForm=(newValues)=>{
        setFields(newValues);
    }
    

    return {
        inputValues,
        buscarPeliculas,
        setDataForm
    };
}
