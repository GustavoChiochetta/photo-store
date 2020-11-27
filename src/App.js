import React, { useEffect } from 'react';
import Login from './pages/Login';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import * as firebase from 'firebase/app';

const App = () =>  {

  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/main" component={Main}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
