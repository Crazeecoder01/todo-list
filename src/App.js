import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editToDo = todos.find((ele) => ele.id === editId);
      // newToDo is a new array of todos with the edited todo
      const newTodDo = todos.map((t) => t.id === editToDo.id
        ? { id: t.id, todo }
        : { id: t.id, todo: t.todo }
      )
      setTodos(newTodDo);
      setEditId(null);
      setTodo("");
      return;
    }
    if (todo !== "") {
      setTodos([{ id: `${Date.now()}`, todo }, ...todos])
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((ele) => ele.id !== id);
    setTodos([...delTodo]);
  }

  const handleEdit = (id) => {
    const findtodo = todos.find((ele) => ele.id === id);
    setTodo(findtodo.todo);
    setEditId(id);
  }



  return (
    <div className='App'>
      <div className='container'>
        <h1>ToDo List</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input value={todo} type='text' onChange={(e) => setTodo(e.target.value)} placeholder='Add a ToDo' />
          <button type='submit' >{editId ? "Edit" : "Add"}</button>
        </form>
        <div className='ulList'>
          <ul className='allTodo'>
            {
              todos.map((ele) => (
                <li className='oneTodo' key={ele.id}>
                  <span className='task'>{ele.todo}</span>
                  <button onClick={() => handleEdit(ele.id)}>Edit</button>
                  <button onClick={() => handleDelete(ele.id)}>Delete</button>
                </li>
              ))
            }

          </ul>
        </div>

      </div>

    </div>
  )
}

export default App