import {createContext, useContext} from "react"

//in context you can pass varible and methods not only states
export const  ThemeContext = createContext({
    themeMode: "light",
    //methods for chnaging color
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

//you can directly export .Provider from this file no need to make new file
export const ThemeProvider =ThemeContext.Provider


//making a custom Hook
export default function useTheme(){
    return useContext(ThemeContext)
}