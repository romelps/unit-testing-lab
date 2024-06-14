import React from 'react';
import { useState } from 'react';
import './App.css';

const App =  () => {
  const [todos, setTodos] = useState([]);
  const [newToDo, setNewToDo] = useState('');
  const [show, setShow] = useState(false);

  const addToDo = (evt) => {
    evt.preventDefault();
    setTodos([...todos, newToDo]);
    setNewToDo('');
    // toggleToDo();
  }

  const handleChange = (event) => {
    setNewToDo(event.target.value);
  }

  // const toggleToDo = () => {
  //   setShow(true);
  // }

  return <>
    <h1>Todo List</h1>
    <form>
      <label htmlFor='newToDo'>New To Do: </label>
      <input 
        type="text"
        id="newToDo"
        // value={newToDo}
        onChange={handleChange}
      />
      <button type="submit" onClick={addToDo} >Add Todo</button>
    
    <div>
      
      <ul>
        
        {todos.map((todo) => (
          <li id={todo.id}>{todo}</li>
        ))} 
      </ul>
    
    </div>
    </form>
  </>
}

export default App;
