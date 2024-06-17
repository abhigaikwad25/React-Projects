import { useEffect, useState } from 'react'
import { TodoProvider} from "./contexts/index"
import './App.css'
import  TodoForm  from './components/TodoForm'
import  TodoItem  from './components/TodoItem'

function App() {
  //all to are i  the todos in the form of array
  const [todos, setTodos] = useState([])


  const addTodo = (todo) => {
    //is use for add value in todolist
    //use callback take prev value ...todo spread the value in todo like text,completed and add prev todo in that using ...prev
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
    
  }


  const updateTodo = (id, todo) => {
    //prevTodo is each element in array iterate by using map
    //in prev have the previse array data using map each prevtodo.id check with id 
    ///if yes then change todo with new todo if not then prevtodo as itis 
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id) ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    //it will filter the delete todo you want by checking id of them 
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  //this function is use to show todo are completed are not using checkbox
  const toggleComplete= (id)=>{
    //check todo with your toggleelement id
    //if yes then i will change completed with opposite like false with true and vise versa 
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id ===id?{...prevTodo,completed: !prevTodo.completed}:prevTodo))
  }

  // this hook is use for get data from locakstorage and convert it in the JSON format //and it will always get items when application is reload or start
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  //convert the json data in si=tring data
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  







  return (
    //valuse are work as a props pass to TodoProvider they are sates or function
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
    <div className="bg-dark min-vh-100 py-5">
      <div className="container">
        <div className="w-100 max-w-2xl mx-auto shadow p-4 rounded text-white">
          <h1 className="h2 font-weight-bold text-center mb-4 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm />
          </div>
          <div className="d-flex flex-wrap gap-3">
            {/* Loop and Add TodoItem here */}
            {/**/}
            {todos.map((todo) => (
              //USING MAP function todo from todos are iterate and for change, add, remove using uniqe identifier
              <div key={todo.id} className="w-100">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </TodoProvider>
);
};


export default App
