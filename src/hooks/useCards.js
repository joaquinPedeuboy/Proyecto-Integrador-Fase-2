import { useState } from "react";

export default function useCards(lasPeliculas=[]) {
    const [inputValues, setFields] = useState(lasPeliculas);

    const setDataForm=(newValues)=>{
        setFields(newValues);
    }

    const handleInputForm = ({target})=>{
        setFields({
            ...inputValues,
            [target.name]:target.value
        })
    }

    return {
        inputValues,
        setDataForm,
        handleInputForm
    };
}
