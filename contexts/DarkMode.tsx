import { useState, useEffect, createContext } from "react";

interface IDarkMode {
  children: JSX.Element;
}

interface IDark {
  isDarkMode: boolean;
  changeDarkMode: any;
}

export const DarkModeContext = createContext<IDark | null>(null!);
export const DarkModeProvider = ({ children }: IDarkMode) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const updateTheme = () => {
    const currentTheme = localStorage.getItem("isDarkMode") || "false";

    if (currentTheme === "true") {
      // document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      // document.body.classList.remove("dark");
      setDarkMode(false);
    }
  };

  const changeDarkMode = (value: any) => {
    localStorage.setItem("isDarkMode", value.toString());
    updateTheme();
  };

  useEffect(() => {
    updateTheme();
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, changeDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
