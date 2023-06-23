import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddYours } from "./MyComponents/AddYours";
import { Footer } from "./MyComponents/Footer";
import React, { useState } from 'react';

function App() {

  let initTodo;
if (localStorage.getItem("todos")) {
        initTodo =[0];
}
else{
  initTodo = JSON.parse(localStorage.getItem("todos"));
}
 const onDelete = (todo)=>{
  console.log("I am ondelete of todo", todo);
//  let index = todos.indexOf(todo);
//  todos.splice,(index,1);
setTodos(todos.filter((e)=>{
  return e!==todo;
}));
localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addYours = (title,Desc)=>{
    console.log("I am adding todo", title , Desc)
    let Sno;
    if (todos.length===0) {
     Sno=0;
      
    } else {
     Sno = todos[todos.length - 1].Sno + 1;
      
    }
    
    const myTodo = {
     Sno: Sno,
      title: title,
      Desc: Desc,

    }  
    setTodos([...todos, myTodo]);
    console.log(myTodo);

     localStorage.setItem("todos",JSON.stringify(todos));
    
  }
  const [todos, setTodos] = useState([]);
   
  return (
    <>
      <Header title ="MyList" searchBar = {false}/>
      <AddYours addYours={addYours}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
