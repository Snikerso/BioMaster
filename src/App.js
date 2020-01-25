import React from 'react';
import './App.css';
import Navigation from './ComponentsLayout/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Base from './Components/Base/Base'
import Buildings from './Components/Buildings/Buildings'
import Mapa from './Components/Map/Map'

function App() {
  return (
    <div>
      <Router>
        <Navigation />



        <Route exact path="/Base" component={Base} />
        <Route exact path="/Buildings" component={Buildings} />
        <Route exact path="/Map" component={Mapa} />
      </Router>


    </div>
  );
}

export default App;
