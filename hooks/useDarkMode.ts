import { useContext } from "react";
import { DarkModeContext } from "@/contexts/DarkMode";

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === null) {
    throw new Error("useAuth can only be used inside AuthProvider");
  }
  return context;
};
