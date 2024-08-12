import React from 'react';
import { TodoCounter } from '../TodoCounter/Index';
import { TodoSearch } from '../TodoSearch/Index';
import { TodoList } from '../TodoList/Index';
import { TodoItem } from '../TodoItem/Index';
import { CreateTodoButton } from '../CreateTodoButton/Index';
import { TodosLoading } from '../TodosLoading/Index';
import { TodosError } from '../TodosError/Index';
import { EmtyTodos } from '../EmtyTodos/Index';
import { Modal } from '../Modal/Index';
import { TodoForm } from '../TodoForm/Index';
import { TodoContext } from '../TodoContext/Index';




function AppUi(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return(
      <>
        <TodoCounter/>
        <TodoSearch/>

        <TodoList>
          {loading && (
            <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            </>
          )}
          {error && <TodosError/>}
          {(!loading && searchedTodos.length === 0) && <EmtyTodos/>}
          {searchedTodos.map(todo =>(
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed ={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete = {()=> deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
        {openModal && (
                  <Modal>
                      <TodoForm />
                  </Modal>
        )}    
      </>
  )
}

export { AppUi };