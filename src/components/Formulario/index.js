import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import "./styles.css"

const Formulario = (props) => {

    /**
   * Stateless
   * Stateful
   *
   * Formularios controlados
   *  1- Crear un estado(useState)
   *  2- Vincular el input con el estado --> value
   *  3- Menejar el evento onChange
   *    3.1 - Generamos una funcion que reciba el evento
   *    3.2 - Vincular el onChange del input con el 3.1
   *    3.3 - Debemos actualizar el edo. accediendo al evento.target.value y usando la func.
   *           que actualiza el edo.
   * 4- Cuando renemos controlados todos los inputs vamos a manefar el evento onSubmit del form
   *    4.1 - Generamos una funcion qye reciba el evento
   *    4.2 - Vincular el onSubmit del form con el 4.1
   *    4.3 - Prevenir el comportamiento por defecto - evento.preventDefault()
   *
   */    

    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    function manejaCambio(evento) {
        // console.log(evento.target.value)
        setTitulo(evento.target.value);
    }

    function manejaDescripcion(evento) {
        setDescripcion(evento.target.value)
    }

    function enviarDatos(evento) {
        // console.log(evento);
        evento.preventDefault();
        // console.log("Datos a enviar", { titulo, descripcion });
        props.envioDeTarea({
            titulo:titulo,
            descripcion: descripcion,
            completada: false,
        });
        setTitulo("");
        setDescripcion("");
        // fetch
        // fetch("url", { method: "post" })

    }


    const envioDeTarea = () => {

    }
  
    return (
    <form className='Formulario' onSubmit={enviarDatos}>
        <h2>Agrega tu tarea</h2>
        {/* imputs componentes NO controlados */}
        <input 
        placeholder='Ingresa el titulo'
        value={titulo}
        onChange={manejaCambio}
        />
        <input 
        placeholder='Ingresa tu descripción'
        value={descripcion}
        onChange={manejaDescripcion}
        />
        <Button variant='primary' type='submit'>
            Agregar
        </Button>

    </form>
  )
}

export default Formulario