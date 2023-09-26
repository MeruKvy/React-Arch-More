import { React, createContext, useState, useEffect } from "react";
import { Navbar } from "./components";
import {
  Header,
  Rooms,
  Consultation,
  Quote,
  RealizeDream,
  Footer,
} from "./containers";

import "./App.css";

export const ThemeContext = createContext("null");

const App = () => {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light-theme" ? "dark-theme" : "light-theme"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <Navbar />
        <Header />
        <Rooms />
        <Consultation />
        <Quote />
        <RealizeDream />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
