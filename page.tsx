"use client"
import { useState } from 'react';
const IndexPage = () => 
  {
     const [todo, setTodo] = useState('');
  const[todos, setTodos] = useState([
   
    {id: 1, content: 'todo1'},
    {id: 2, content: 'todo2'},
    {id: 3, content: 'todo3'}
  ])
  const handleAddFormChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
 
  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([ {id: todos.length+1, content: todo }, ...todos]);
      setTodo('');
    }
  };

  return (
    <>
    <input type="text" onChange={handleAddFormChanged} value={todo} />
    <button onClick={addTodo}>Add</button>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.content}</li>
      ))}
    </ul>
    </>
  );
}
export default IndexPage;