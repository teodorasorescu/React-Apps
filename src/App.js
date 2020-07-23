import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Paintings from './components/paintings';
import Sculptures from './components/sculptures';
import Header from './components/header';
import VincentvanGogh from './components/vanGogh';
import ClaudeMonet from './components/monet';
import PabloPicasso from './components/picasso';
import GustavKlimt from './components/klimt';
import LeonardoDaVinci from './components/daVinci';
import Rodin from './components/rodin';
import Donatello from './components/donatello';
import Brancusi from './components/brancusi';
import Michelangelo from './components/michelangelo';
import Alberto from './components/alberto';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/VincentVanGogh'>
            <VincentvanGogh />
          </Route>
          <Route exact path='/ClaudeMonet'>
            <ClaudeMonet />
          </Route>
          <Route exact path='/PabloPicasso'>
            <PabloPicasso />
          </Route>
          <Route exact path='/GustavKlimt'>
            <GustavKlimt />
          </Route>
          <Route exact path='/LeonardoDaVinci'>
            <LeonardoDaVinci />
          </Route>
          <Route exact path='/AugusteRodin'>
            <Rodin />
          </Route>
          <Route exact path='/ConstantinBrancusi'>
            <Brancusi />
          </Route>
          <Route exact path='/Michelangelo'>
            <Michelangelo />
          </Route>
          <Route exact path='/AlbertoGiacometti'>
            <Alberto />
          </Route>
          <Route exact path='/Donatello'>
            <Donatello />
          </Route>
          <Route exact path='/paintings'>
            <Paintings />   
          </Route>
          <Route exact path='/sculptures'>
            <Sculptures />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*<Switch>
            <Route exact path='VincentVanGogh/'>
              <VincentvanGogh />
            </Route>
          </Switch>*/