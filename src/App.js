import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Placeholder from "./components/placeholder/Placeholder";
import Homepage from "./components/homepage/Homepage";

import JuniorFE from './components/jobs/positions/JuniorFE';
import SeniorFE from './components/jobs/positions/SeniorFE';
import JuniorBE from './components/jobs/positions/JuniorBE';
import SeniorBE from './components/jobs/positions/SeniorBE';
import JuniorFS from './components/jobs/positions/JuniorFS';
import SeniorFS from './components/jobs/positions/SeniorFS';
import DevOps from './components/jobs/positions/DevOps';

function App() {
  return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Homepage} />
          <Route path="/positions/junior-frontend-developer" exact component={JuniorFE} />
          <Route path="/positions/senior-frontend-developer" exact component={SeniorFE} />
          <Route path="/positions/junior-backend-developer" exact component={JuniorBE} />
          <Route path="/positions/senior-backend-developer" exact component={SeniorBE} />
          <Route path="/positions/junior-fullstack-developer" exact component={JuniorFS} />
          <Route path="/positions/senior-fullstack-developer" exact component={SeniorFS} />
          <Route path="/positions/devops-engineer" exact component={DevOps} />
          <Route path="/" exact component={Placeholder} />
          <Route path="/dev" exact component={Homepage} />
        </div>
      </Router>
  );
}

export default App;
