import React from 'react';
import { TodoContext } from '../TodoContext/Index';
import './TodoCounter.css'

function TodoCounter(){

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  if(totalTodos === completedTodos){
    return(
      <h1 className='TodoCounter'>
      ¡Has completado todos tus pendientes! ¡Felicitaciones!
    </h1>    
      );
  }else{
    return(
    <h1 className='TodoCounter'>
    Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
  </h1>    
    );}
  }
  
  export {TodoCounter};