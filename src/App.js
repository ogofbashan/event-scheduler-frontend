import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Schedule from './views/schedule';
import Events from './views/events';


function App() {
  return(
    <div className="App">
      <Header />
      <Switch>
        <div className="container">
          <Route exact path='/' render={() => <Schedule />} />
          <Route exact path='/events' render={() => <Events />} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
