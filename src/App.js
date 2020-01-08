import React from "react";
import Header from "./components/Header.js";
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchForm from './components/SearchForm';
import WelcomePage from './components/WelcomePage';
import Pagination from './components/Pagination';


export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact path='/'>
          <WelcomePage />
        </Route>
        <Route path='/characters'>
          <SearchForm />
        </Route>
      </Switch>
      <Pagination />
    </main>
  );
}
