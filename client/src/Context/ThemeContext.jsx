import { createContext, useContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const systemeTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const [theme, setTheme] = useState(systemeTheme);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      return;
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    if (theme == false) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      return;
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
