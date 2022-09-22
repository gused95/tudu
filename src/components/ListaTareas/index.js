import React from 'react'
import Tarea from '../Tarea'

const ListaTareas = (props) => {
  // console.log(props.todasLasTareas);
  const { todasLasTareas } = props;
  return (
    <div>
      <h2>Lista de Tareas</h2>
      {
        todasLasTareas.map((info, posicion) => {
          return (
          <Tarea key={posicion} 
          {...info} 
          elimina
          indice={posicion}
          eliminarTarea={props.eliminarTarea}
          />
          
          
          )
          
        })
      }
    </div>
  )
}

export default ListaTareas