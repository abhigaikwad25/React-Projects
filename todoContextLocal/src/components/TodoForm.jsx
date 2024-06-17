import React,{useState} from 'react'
import "../App.css"
import {useTodo} from "../contexts/TodoContext"

function TodoForm() {

    const [todo,setTodo]=useState("")
    const {addTodo}=useTodo();

    const add=(e)=>{
        e.preventDefault()
        
        if(!todo) return
        // thats the real work of contect API 
        addTodo({todo, completed: false})
        setTodo("")


    }





// import React, { useState } from 'react'
// import { useTodo } from '../contexts/TodoContext';

// function TodoForm() {
//     const [todo, setTodo] = useState("")
//     const {addTodo} = useTodo()

//     const add = (e) => {
//       e.preventDefault()

//       if (!todo) return

//       addTodo({ todo, completed: false})
//       setTodo("")
//     }



    return (
        <>
      <form onSubmit={add} className="d-flex">
        <input
          type="text"
          placeholder="Write Todo..."
          className="form-control border rounded-start todo-input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="btn btn-success rounded-end">
          Add
        </button>
      </form>

        </>
    )
}

export default TodoForm
