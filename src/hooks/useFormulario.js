import React, { useState } from 'react'

export const useFormulario = (initialState) => {

    const [inputs, setInputs] = useState(initialState)

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        // una opcion para controlar el formulario
        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checked : value
        }))
    };

    const reset = () => {
        setInputs(initialState)
    }


  return [inputs, handleChange, reset];
}
