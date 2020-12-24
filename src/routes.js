import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from '../src/components/Header';
import Home from './pages/Home';


const Routes = () => {

  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;