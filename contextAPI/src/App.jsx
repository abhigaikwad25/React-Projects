import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import Themebtn from './components/Themebtn'
import Cart from './components/Cart'
import './App.css'


function App() {
  //make state for changing color of cart
  const [themeMode, setThemeMode] = useState("light")

  //define methods for this two methodd because in Theme.js file they are empty there functionality are not define before
  const lightTheme = () => {
    setThemeMode("dark")
  }
  const darkTheme = () => {
    setThemeMode("light")
  }

  //actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.remove(themeMode)
  }, [themeMode])



































    ////some bug in toggle button after clicking it will not toggle need to debug it


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Cart />
          </div>
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App
