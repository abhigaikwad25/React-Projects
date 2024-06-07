
import "./App.css";

// function App() {
//   return (
//     <div classNameName="App">
//       <header classNameName="App-header">
//         <img src={logo} classNameName="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           classNameName="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }





// //****************************************** importing Bootstrap ************************************



// import csimg from './craftshop-logo.png';
// import Navbar from './component/Navbar.js'

// // let name1 = "Abhijit";
// function practice() {
//   return (
//     <>
//       {/* <div classNameName="container">

//         <img src={csimg} alt="craftshop img" />
//         <h1>Hello {name1}</h1>

//       </div>
//       <h1></h1> */}


//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Navbar</a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Link</a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Dropdown
//                 </a>
//                 <ul className="dropdown-menu">
//                   <li><a className="dropdown-item" href="#">Action</a></li> 
//                   <li><a className="dropdown-item" href="#">Another action</a></li>
//                   <li><hr className="dropdown-divider"/></li>
//                   <li><a className="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//                 <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//       <Navbar/>  {/* Its a component importing from Navbar.js */}

//     </>
//   )
// }

// export default practice;




// //************************************************** Props *******************************************/



import Navbar from './component/Navbar';
import Textform from './component/textFile_2';
import React, { useState } from "react";
import Alert from './component/Alert1';
import About from './component/About1';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function Practice() {
  //this usestate run by showing a value for another tasks 
  const [alert, setAlert] = useState(null);


  //ShowAlert run by taking a massage and type
  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }



  const [switchText, setSwitchText] = useState("Enable light Mode");
  const [mode, setMode] = useState('light');
  let toggleSwitch = () => {

    // //For making custom pallets its not complet it have some bug logic : CWH
    // console.log(color)
    // document.body.classList.add('bg-'+color)


    if (mode === 'light') {
      setMode("dark");
      setSwitchText("Enable light Mode");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'White';
      showAlert("Dark mode is enable", "Success")
    }
    else {
      setMode("light");
      setSwitchText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode is enable", "Success")

    }
  }




  return (
    <>


        <BrowserRouter>
        <Navbar title="TextConverter" Home="Home" mode={mode} toggleSwitch={toggleSwitch} switchText={switchText} />
          <Routes>
            <Route path='/' element={<Textform showAlert={showAlert} heading="Enter the Text" />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </BrowserRouter>



        {/* Its a component importing from Navbar.js */}
        <Alert alert={alert} />

    </>
  )
}

export default Practice;