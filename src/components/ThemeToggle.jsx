import React, {use, useContext} from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';



export const ThemeToggle = () => {
    const {toggleTheme, theme} = useContext(ThemeContext)
    return(
        <button onClick={toggleTheme}
        className={`${theme === "light" ? "bg-white text-black border border-black" : "bg-black text-white border border-white"}`}
        >
            Switch to {theme === "light" ? "dark" : "light"} mode
        </button>
    )
}