import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"40px auto",
    backgroundColor: 'LightGray',
  }
  return (
    <div className="container" style={myStyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todos.length===0? "Sorry man! no todos to display":
      props.todos.map((todo)=>{
        return (
          <>
        <TodoItem todo={todo} key={todo.Sno} onDelete={props.onDelete}/> <hr/> 
          </>
          )
      })
      }

      
    </div>
  )
}
