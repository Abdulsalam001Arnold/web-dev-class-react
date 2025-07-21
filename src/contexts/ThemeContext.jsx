
import React, {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext()


export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        return savedTheme ? JSON.parse(savedTheme) : "light" 
    })

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
        document.body.className = theme
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}