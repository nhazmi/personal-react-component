import { useEffect, useState } from "react";
import "./ToggleTheme.css"

export default function ToggleTheme() {
  //   const [theme, setTheme] = useState("Light"); this is wrong due to each refresh 
  // will call the value as "Light"
  const [theme, setTheme] = useState(function () {
    return localStorage.getItem("theme") === "Light" ? "Light" : "Dark";
  });
  //    set the initialised value of state variable to be taken from the localStorage 
  //    that way the page is same even after refresh
  

  function handleThemeToggle() {
    setTheme(function (prevTheme) {
    const newTheme = prevTheme === "Light" ? "Dark" : "Light"
    document.documentElement.setAttribute("theme", newTheme);
    //document.documentElement.setAttribute will 
    // set the attribute to the whole body of the page
    // and the attribute will be accessible by any stylesheet that target the attribute
    localStorage.setItem("theme", newTheme);
    console.log(newTheme)
    return newTheme
    });
    
  }

  useEffect(function () {
    localStorage.getItem("theme");
    document.documentElement.setAttribute("theme", theme);
  }, []);

  return (
    <div className="container">
      <h1>{theme} Mode</h1>
      <button className="button" onClick={handleThemeToggle}>
        {theme === "Light" ? "Dark" : "Light"}
      </button>
    </div>
  );
}
