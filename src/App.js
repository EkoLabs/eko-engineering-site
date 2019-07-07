import React from 'react';
import './App.scss';
import Splash from "./components/splash/Splash";
import Header from "./components/header/Header";
import Tech from "./components/tech/Tech";
import Gallery from "./components/gallery/Gallery";
import Jobs from "./components/jobs/Jobs";
import ContactForm from "./components/contactform/ContactForm";
import Projects from "./components/projects/Projects";
import Investors from "./components/investors/Investors";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Splash/>
      <Tech/>
      <Projects/>
      <Gallery/>
      <Investors/>
      <Jobs/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
