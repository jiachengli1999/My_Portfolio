import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js'
import activitiesP1 from './components/activities/activitiesP1.js'
import modelingP1 from './components/modeling/modelingP1.js'

function App() {
  return(
    <div>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/activities" component={activitiesP1} />
          <Route path="/modeling" component={modelingP1} />
          <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App;
