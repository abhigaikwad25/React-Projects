import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  //provider is inbuild functionality you only neeed to import it
  //valuse keyword change with store 
  <Provider store={store}>
    <App />
  </Provider>,
)
