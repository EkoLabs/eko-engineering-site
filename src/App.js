import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Homepage} />
        </div>
      </Router>
  );
}

export default App;
