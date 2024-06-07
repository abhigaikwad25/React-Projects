import { useState } from 'react';
import './App.css';


function App() {
  let [counter, setCounter] = useState(25)
  // let counter=25;
  const Adding=()=>{
    counter=counter+1;
    if(counter<=45){
      setCounter(counter=>counter+1); //its a calback function this counter can take a previse counter value and update on it
      setCounter(counter=>counter+1);
      setCounter(counter=>counter+1);
      setCounter(counter=>counter+1);
    }
    // console.log(counter)
  }
  const Removing=()=>{
    counter=counter-1;
    if(counter>=0){ 
      setCounter(counter);
    }
    // console.log(counter)
  }
  // console.log("xyz")
  return (

    <div className="App">
        <h1>Counter : {counter}</h1>
        <button onClick={Adding}>Add : {counter}</button>
        <button onClick={Removing}>Remove : {counter}</button>

    </div>
  );
}

export default App;
