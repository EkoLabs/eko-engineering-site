import React from 'react';
import './App.scss';
import Splash from "./components/splash/Splash";
import Header from "./components/header/Header";
import Tech from "./components/tech/Tech";
import Gallery from "./components/gallery/Gallery";
import Jobs from "./components/jobs/Jobs";
import ContactForm from "./components/contactform/ContactForm";

function App() {
  return (
    <div className="App">
      <Header/>
      <Splash/>
      <Tech/>
      <Gallery/>
      <Jobs/>
      <ContactForm/>
    </div>
  );
}

export default App;
