import { useState } from 'react';
import './App.css';

function App() {



  const [color, setColor] = useState("green");

  return (
    <>
    <div className="board" style={{ backgroundColor: color }}>
      <div className="btn-container pt-10 pb-10 container " >
        <button type="button " class="btn btn-primary mx-4 " id='btns' onClick={() => setColor("blue")} >Blue</button>
        <button type="button " class="btn btn-secondary mx-4" id='btns' onClick={() => setColor("gray")}>Gray</button>
        <button type="button " class="btn btn-success mx-4" id='btns' onClick={() => setColor("green")}>Green</button>
        <button type="button " class="btn btn-danger mx-4" id='btns' onClick={() => setColor("red")}>Red</button>
        <button type="button " class="btn btn-warning mx-4" id='btns' onClick={() => setColor("yellow")}>Yellow</button>
        <button type="button " class="btn btn-info mx-4" id='btns' onClick={() => setColor("aqua")}>Aqua</button>
        <button type="button " class="btn btn-light mx-4" id='btns' onClick={() => setColor("white")}>White</button>
        <button type="button " class="btn btn-dark mx-4" id='btns' onClick={() => setColor("black")}>Dark</button>
      </div>
    </div>
    </>
  );
}

export default App;
