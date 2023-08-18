import { useEffect, useState } from "react";
import "./App.css";
import "./Themes/Themes.css";
import Themes from "./Themes/Themes";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(()=>{document.body.className = theme}, [theme])

  return (
    <div className="App">
      <Themes onclick={toggleTheme} />
    </div>
  );
}

export default App;
