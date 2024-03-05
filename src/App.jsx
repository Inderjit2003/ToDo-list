import React from 'react'

import AddTodo from './Screens/AddTodo.jsx'
import Todo from './Screens/Todo.jsx';


export default function App() {
  const todoitem = [
    {
    title:"Shopping",
    desc:"Alpha Mall ",
    remark:"laptop",
  },
  { 
    title:"Food",
    desc:"Zomato",
    remark:"Burger",
  },
  { 
    title:"shoes",
    desc:"Mall",
    remark:"sandel",
  }
];
  return (
    <div>
      <AddTodo />
     <Todo item={todoitem}/>
    </div>
  )
}

