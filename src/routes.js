import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Game from "./components/game/Game";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/game" component={Game}/>
  </Route>
)
