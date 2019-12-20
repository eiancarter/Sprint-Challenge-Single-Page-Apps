import React from "react";
import Header from "./components/Header.js";
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CharacterList from './components/CharacterList';
import CharacterCard from './components/CharacterCard';
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path='/'>
          <WelcomePage />
        </Route>
        <Route path='/characters'>
          <CharacterList/>
        </Route>
        <Route path='/characters/:id'>
          <CharacterCard items={CharacterList} />
        </Route>
      </Switch>
    </main>
  );
}
