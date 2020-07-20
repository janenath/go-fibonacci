import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';

import Home from './Components/Home'
import Error from './Components/Error'
import Result from './Components/Result'


function App() {
  return (
    <Router>
      <div className="appContainer">
        <Switch>
          <Route path="/error">
            <Error/>
          </Route>
          <Route path="/result">
            <Result/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>


  );
}

export default App;