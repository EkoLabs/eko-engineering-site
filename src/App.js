import React from 'react';
import './App.scss';
import Splash from "./components/splash/Splash";
import Header from "./components/header/Header";
import Tech from "./components/tech/Tech";

function App() {
  return (
    <div className="App">
      <Header/>
      <Splash/>
      <Tech/>
    </div>
  );
}

export default App;
