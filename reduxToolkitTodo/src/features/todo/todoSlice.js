//create slice are use for create reducer //slice is also a reducer ,use slice  to define to show we are use react-redux
//nanoid core redux property to generate unique id   
import {createSlice, nanoid } from '@reduxjs/toolkit';

//define the initial state to define the define the initial state of array
const initialState = {
    //todos are array in that for single todo define the object contain the id and text 
    todos: [{id: 1, text: "Hello world"}]
}


//create slice are use for create reducer
//slice is also a reducer ,use slice  to define to show we are use react-redux
//in reducer 3 things are important name, initialState , reducer
export const todoSlice = createSlice({
    name: 'todo',
    //call initial state we have make 
    initialState,
    //in reducer write define function and their functionality
   
    reducers: {
         //define reducer using state and action //STATE can take the current data in todos array //action can take data from state and do some action on in it
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

//export reducer function using <reducer_name>.actions fro use of singel function any any component
export const {addTodo, removeTodo} = todoSlice.actions

//export reducer to define in store
export default todoSlice.reducer