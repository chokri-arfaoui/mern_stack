import React, { useState } from 'react';
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) =>{
    event.preventDefault();
    if(newTodo.length==0){
      return;
    }

    const todoItem = {
      text : newTodo,
      complete : false
    };



    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;

    });

    setTodos(filteredTodos);


  }

  const handleToggleComplete=(idx)=>{
    const updatedTodos = todos.map((todo, i) =>{
      if (idx==i){
        todo.complete = !todo.complete;
        // to avoid mutating the todo FileSystemDirectoryHandle, do this
        // const updatedTodo = {...todo, complete : !todo.complete};
        // return updatedTodo;
      }
      return todo;
    }
    ) 
    setTodos(updatedTodos);
  };
  

  return (
    
      <div >
        <form onSubmit={(event) =>{
          handleNewTodoSubmit (event )
        }}>
          <input onChange={(event) =>{
            setNewTodo(event.target.value);
          }}type='text' 
          value = {newTodo}
          /> <br /><br />
          <div>
            <button>Add</button>
          </div>
          
        </form>
        <br />
        <hr />
        <br />

        {todos.map((todo, i) =>{
          
          return (
            <div key={i}>
              <input onChange={(event)=>{
                handleToggleComplete(i);
              }}   checked={todo.complete} type="checkbox" />
              <span>{todo.text}</span>
            

            <button onClick={(event) => {
              handleTodoDelete(i);

            }}
            style={{marginLeft:"10px"}}
            
            >Delete</button>
            <br />
            </div>
          );
        })}
        
      </div>
        
    
  );
}

export default App
