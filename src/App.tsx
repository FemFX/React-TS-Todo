import React, { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { iTodo } from './interfaces';

const App: React.FC = () => {
  const [todos, setTodos] = useState<iTodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as iTodo[]
    setTodos(saved)
  },[])
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
  const addTodo = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };
  const toggleHandler = (id : number) => {
    setTodos(items => items.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }  
      return todo
    }))
  }
  const removeTodo = (id : number):void => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm addTodo={addTodo} />

        <TodoList todos={todos} removeTodo={removeTodo} toggleHandler={toggleHandler}/>
      </div>
    </>
  );
};

export default App;
