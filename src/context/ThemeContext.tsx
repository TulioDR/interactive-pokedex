"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextInterface {
   themeColor: string;
   changeThemeColor: (newColor: string) => void;
}

const ThemeContext = createContext({} as ThemeContextInterface);
export default function useThemeContext() {
   return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
   const [themeColor, setThemeColor] = useState<string>("#D31027");
   // #E60012
   // 🔄 Read from localStorage when the app boots up on the client
   useEffect(() => {
      const savedColor = localStorage.getItem("theme_color");
      if (savedColor) {
         setThemeColor(savedColor);
      }
   }, []);

   // 💾 Custom setter that updates both our app state AND local storage
   const changeThemeColor = (newColor: string) => {
      setThemeColor(newColor);
      localStorage.setItem("theme_color", newColor);
   };

   const value: ThemeContextInterface = {
      themeColor,
      changeThemeColor,
   };

   return (
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
   );
}
