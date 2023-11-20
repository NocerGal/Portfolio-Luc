/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import i18n from '../i18n';

export const ThemeContext = createContext(null);

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const systemeTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  const [theme, setTheme] = useState(systemeTheme);
  const [lang, setLang] = useState(navigator.language.substring(0, 2));

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

  const toggleLang = (lang) => {
    setLang(lang);
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

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, lang, toggleLang }}>
      {children}
    </ThemeContext.Provider>
  );
}
