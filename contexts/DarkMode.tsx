import { useState, useEffect, createContext } from "react";

interface IDarkMode {
  children: JSX.Element;
}

export const DarkModeContext = createContext({});
export const DarkModeProvider = ({ children }: IDarkMode) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const updateTheme = () => {
    const currentTheme = localStorage.getItem("isDarkMode") || "false";

    if (currentTheme === "true") {
      document.body.classList.add("dark");
      setDarkMode(true);
    } else {
      document.body.classList.remove("dark");
      setDarkMode(false);
    }
  };

  useEffect(() => {
    updateTheme();
  }, []);

  const changeDarkMode = (value: any) => {
    localStorage.setItem("isDarkMode", value.toString());
    updateTheme();
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, changeDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
