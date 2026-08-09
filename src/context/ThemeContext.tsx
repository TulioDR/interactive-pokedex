"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

interface ThemeContextInterface {
  themeColor: string;
  changeThemeColor: (newColor: string) => void;
}

const DEFAULT_COLOR = "#D31027";

// Helper para suscribirse a cambios de localStorage
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

// Helper para leer del cliente
function getSnapshot() {
  return localStorage.getItem("theme_color") || DEFAULT_COLOR;
}

// Helper para el Servidor (SSR)
function getServerSnapshot() {
  return DEFAULT_COLOR;
}

const ThemeContext = createContext({} as ThemeContextInterface);

export default function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeColor = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const changeThemeColor = (newColor: string) => {
    localStorage.setItem("theme_color", newColor);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <ThemeContext.Provider value={{ themeColor, changeThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}
