import { useCallback, useState, useEffect,useRef } from 'react';
import './App.css';

function App() {
  //at default state numberAllowed can be false 
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")

  //useRef hook take a reference of the defineed ref portion and use for the selection and many other
  //defaultly it is null 
  const passwordRef=useRef(null)

  const Pwdgenerator = useCallback(() => {
    //in that password can written
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    //numberAllowed is true then in str 0 to 9 digit can add  at the end
    if (numberAllowed) {
      str += "0123456789";
    }
    //charAllowed is true then in the str special char can add at the end
    if (charAllowed) {
      str += "!@#$%^&*[]{}_+-?/<>~";
    }
    
    //as per the length selected in range for loop can be iterate
    for (let i = 0; i < length; i++) {


      //math.random can generate floating point random number from 0 to 1 ,like 0.435672 multiply this number by the length of string 
      //every time it will generate different number 
      let char = Math.floor(Math.random() * str.length)

      //this number can take the character from the string by using chatAt and append to pass varible
      pass += str.charAt(char)
    }
    //password can updated by using setPassword state
    setPassword([pass])
  }, [numberAllowed, charAllowed, length, setPassword])

  //useEffect is one type of hook
  //in that (function, [dependencies(in that states are there)]) if any changes in dependencies then it will run the function  
  useEffect(()=>{
    Pwdgenerator();
  },[numberAllowed, charAllowed, length, Pwdgenerator])


  //use for copy the text from password inputfield
  const copytext=useCallback(()=>{
    //passwordRef use for selecting the passwoed area text show the text are copy
    //current? shows current text count dont know 
    passwordRef.current?.select();
    let text=document.getElementById('mytext')
    navigator.clipboard.writeText(text.value);
  },[password])

  return (
    <div className="main container bg-secondary p-2 w-100 shadow rounded-lg px-4 my-8" style={{ maxwidth: '28rem' }}>
      <div className="d-flex justify-content-center  rounded-lg overflow-hidden mb-4 px-4 my-4 " >
        <input className="pass-text" id='mytext' type="text" value={password} placeholder='Password' ref={passwordRef} />
        <button type="button" className="btn btn-primary"  onClick={copytext}>Copy</button>
      </div>

      <div className="d-flex justify-content-center rounded-lg overflow-hidden mb-4 px-4 my-4 " >

        <div className="d-flex justify-content-center align-items-center mx-2">
          <input className='mx-1 ' type="range" min={6} max={100} value={length} onChange={(e) => { setLength(e.target.value) }} />
          <label className='text-info'>Length: {length}</label>

        </div>
        <div className="d-flex justify-content-center align-items-center mx-2">
          <input
            type='checkbox'
            checked={numberAllowed}
            id="numberInput"
            className='mx-1'
            //onChange can run when you are click on it like 
            onChange={() => {
              //setNumberAllowed set number allowed true or false
              //in setNumberAllowed use callback function take the previous value and make changes on it 
              //if previously valus is false then it will set true and vise versa 
              setNumberAllowed((prev) => !prev)
            }} />
  
          {/*htmlFor use to associate it with a specific form control, such as an <input>, <textarea>, or <select> element            */}
          <label htmlFor='numberInput' className='text-info'>Number</label>
        </div>
      

        <div className="d-flex justify-content-center align-items-center mx-2">
          <input
            type='checkbox'
            checked={charAllowed}
            className='mx-1'
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='charInput' className='text-info'>characters</label>
        </div>


      </div>

    </div>
  );
}

export default App;
