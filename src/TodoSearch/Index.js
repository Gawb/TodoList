import './TodoSearch.css'
import React from 'react';
import { TodoContext } from '../TodoContext/Index';

function TodoSearch(){
    const {
        searchValue,
        setSearchValue,
      } = React.useContext(TodoContext) 

    return(
        <input placeholder="Búsca tu tarea..." 
        className="TodoSearch"
        value={searchValue}
        onChange={(event) =>{
            setSearchValue(event.target.value);
 
        }}
        />
    );
}

export { TodoSearch };