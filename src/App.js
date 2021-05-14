import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import Sonorous from './pages/Sonorous/Sonorous';
import careersData from './careersData';
import PositionPage from './components/careers/PositionPage';
import { getUrlParameter, isTouchDevice } from './utils';
import LandingPageDev from './pages/landingPageDev/LandingPageDev';
import LandingPageQa from './pages/landingPageQa/LandingPageQa';

function App() {
  const careersRoutes = careersData.positions.map((positionData) => {
    let positionSlug = `/positions/${positionData.title
      .toLowerCase()
      .replace(/ /g, '-')}`;
    return (
      <Route
        path={positionSlug}
        exact
        render={(props) => {
          return <PositionPage {...props} title={positionData.title} />;
        }}
        key={positionData.title}
      />
    );
  });

  let isTouch = getUrlParameter('forcetouch') || isTouchDevice();

  let easterEggCtaPath = '/challenge-accepted';
  let easterEggUtmParams =
    '/?utm_source=easteregg&utm_medium=console&utm_campaign=easteregg_1';

  return (
    <div className={`App ${isTouch ? 'touch' : ''}`}>
      <Router>
        <Switch>
          {careersRoutes}
          <Route exact path='/sonorous' component={Sonorous} />
          <Route exact path='/letstalkdev' component={LandingPageDev} />
          <Route exact path='/letstalkqa' component={LandingPageQa} />
          <Redirect exact from={easterEggCtaPath} to={easterEggUtmParams} />
          <Route path='/' component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
