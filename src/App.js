import './App.css';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import {AddTodo} from './MyComponents/AddTodo'
import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo)
    setTodos(todos.filter((item) => {
      return item !== todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "you need to go to market to get this job done"
    },
    {
      sno: 3,
      title: "Go to the bhaad",
      desc: "you need to go to market to get this job done"
    }
  ]);

  return (
    <div className="App">
      <Header title="My Todos List" searchBar={true} />
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
