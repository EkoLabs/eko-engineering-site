import React from 'react';
import './App.scss';
import Splash from "./components/splash/Splash";
import Header from "./components/header/Header";
import Tech from "./components/tech/Tech";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Header/>
      <Splash/>
      <Tech/>
      <Gallery/>
    </div>
  );
}

export default App;
