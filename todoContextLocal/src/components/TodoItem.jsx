import React, { useState } from 'react'

import "../App.css"
import { useTodo } from "../contexts/TodoContext"

function TodoItem({ todo }) {

  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const editTodo = () => {
    //take updateTodo  from TodoContext by importing useTodo
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }



  return (
    <div
      className={`d-flex border rounded px-3 py-1.5 gap-3 shadow-sm transition duration-300 ${todo.completed ? "bg-success" : "bg-secondary"}`}
    >
      <input
        type="checkbox"
        className="form-check-input cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`form-control ${isTodoEditable ? "border px-2" : "border-0"} ${todo.completed ? "text-decoration-line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="btn btn-light border text-sm justify-center align-items-center"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="btn btn-light border text-sm justify-center align-items-center"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>

  )


}

export default TodoItem
