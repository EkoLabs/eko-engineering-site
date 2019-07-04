import React from 'react';
import './App.scss';
import Splash from "./components/splash/Splash";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Splash/>
    </div>
  );
}

export default App;
