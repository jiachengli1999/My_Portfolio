import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js'

function App() {
  return(
    <div>
      <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route path="/week2" component={Week2} /> */}
          <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App;
