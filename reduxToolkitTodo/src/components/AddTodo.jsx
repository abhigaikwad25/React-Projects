import React, {useState} from 'react'
//dispatcher can use of reducer to make changes in store
import {useDispatch} from 'react-redux'
//immport only addTodo from tehrir location 
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {
    //make state to input to taken from user 
    const [input, setInput] = useState('')
    //thats the syntax of define the useDispatch()
    const dispatch = useDispatch()


    //define addTodoHandler to use when you are submit the form 
    const addTodoHandler = (e) => {
        e.preventDefault()
        //dispatch can add user input data in store
        dispatch(addTodo(input))
        //and make input empty for new input
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo