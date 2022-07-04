import './App.css';
import register from "./Components/register/register";
import modal from "./Components/modal/modal" ;

import { Switch, Route } from "react-router-dom";
import React from 'react';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={register}/>
      <Route exact path='/validation' component={modal} />
      </Switch>

    </div>
  );
}

export default App;
