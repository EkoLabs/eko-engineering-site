import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Placeholder from "./components/placeholder/Placeholder";
import Homepage from "./components/homepage/Homepage";
import careersData from "./careersData";
import PositionPage from "./components/jobs/PositionPage";

function App() {

  const careersRoutes = careersData.positions.map ( positionData => {
      let positionSlug = `/positions/${positionData.title.toLowerCase().replace(/ /g,'-')}`;
      return <Route path={positionSlug}
             exact
             render={props => {
                 return <PositionPage {...props} title={positionData.title}/>
             }}
             key={positionData.title}
      />
  });

    return (
        <Router>
          <Switch>
            <div className="App">
              {careersRoutes}
               { /* <Route path="/" exact component={Placeholder} /> */}
              <Route path="/" component={Homepage} />
            </div>
          </Switch>
        </Router>
  );
}

export default App;
