import React from "react";
import Search from "./components/Search";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { useState,useEffect } from "react";
// import LogicalNot from "./components/LogicalNot";


const App = () => {
  const [theme,setTheme] =useState('light');
  useEffect(()=> {
    if (theme==='dark') {
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch =() => {
    setTheme(theme==='dark'? 'light' : 'dark');
  };

  return (
    <main className="bg-white dark:bg-black dark:text-white ">
      <div className="flex">
        <Search />
        <button className="bg-green-700 p-4 rounded-3xl" onClick={handleThemeSwitch}>Change Mode</button>
      </div>

      <Hero />
      <section className="flex flex-wrap gap-8 p-4">
        <Card />
      </section>
    </main>
  );
};

export default App;
