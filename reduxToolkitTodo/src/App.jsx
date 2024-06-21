import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1 className="text-2xl "> Welcome to Todos-Nest</h1>
      {/* components are define here and provider is in the main.jsx file //provider can also define here  */}
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
