import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

// Convert hex to "r,g,b" string for use in rgba()
function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `${r},${g},${b}`;
}

export interface ThemeColors {
  cyan: string;   // hex e.g. "#00f0c8"
  purple: string; // hex e.g. "#7c6ff7"
  pink: string;   // hex e.g. "#f472b6"
  bg: string;     // hex e.g. "#05050a"
}

export const DEFAULT_THEME: ThemeColors = {
  cyan: "#00f0c8",
  purple: "#7c6ff7",
  pink: "#f472b6",
  bg: "#05050a",
};

export const PRESET_THEMES: { name: string; colors: ThemeColors }[] = [
  { name: "深空霓虹", colors: DEFAULT_THEME },
  {
    name: "赛博朋克",
    colors: { cyan: "#00d4ff", purple: "#ff6ec7", pink: "#ffd700", bg: "#0a0015" },
  },
  {
    name: "极光森林",
    colors: { cyan: "#39ff14", purple: "#00b4d8", pink: "#e040fb", bg: "#060d06" },
  },
  {
    name: "烈焰熔岩",
    colors: { cyan: "#ff6b35", purple: "#f72585", pink: "#ffbe0b", bg: "#0d0508" },
  },
  {
    name: "冰蓝幻境",
    colors: { cyan: "#7df9ff", purple: "#5b8def", pink: "#c4b5fd", bg: "#050810" },
  },
  {
    name: "樱花物语",
    colors: { cyan: "#ffb7c5", purple: "#c084fc", pink: "#fb7185", bg: "#0a0508" },
  },
];

interface ThemeContextValue {
  theme: ThemeColors;
  setTheme: (colors: ThemeColors) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: DEFAULT_THEME,
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function applyTheme(colors: ThemeColors) {
  const root = document.documentElement;
  root.style.setProperty("--c1", hexToRgb(colors.cyan));
  root.style.setProperty("--c2", hexToRgb(colors.purple));
  root.style.setProperty("--c3", hexToRgb(colors.pink));
  root.style.setProperty("--bg", colors.bg);
  root.style.setProperty("--c1-hex", colors.cyan);
  root.style.setProperty("--c2-hex", colors.purple);
  root.style.setProperty("--c3-hex", colors.pink);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeColors>(() => {
    try {
      const saved = localStorage.getItem("vic-theme");
      if (saved) return JSON.parse(saved);
    } catch {}
    return DEFAULT_THEME;
  });

  const setTheme = (colors: ThemeColors) => {
    setThemeState(colors);
    localStorage.setItem("vic-theme", JSON.stringify(colors));
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
