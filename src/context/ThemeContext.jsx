import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggle = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
