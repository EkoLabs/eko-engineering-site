import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Placeholder from "./components/placeholder/Placeholder";

function App() {
  return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Placeholder} />
          <Route path="/dev" exact component={Homepage} />
        </div>
      </Router>
  );
}

export default App;
