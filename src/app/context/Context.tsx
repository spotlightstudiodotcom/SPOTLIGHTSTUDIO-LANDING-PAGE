"use client"

import { useState,createContext } from "react";
export const ThemeContext = createContext({
    theme: true,
    toggleTheme: () => {},
  });
  
  export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(true);
    const toggleTheme = () => {
      setTheme((prevTheme) => !prevTheme);
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };