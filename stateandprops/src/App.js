import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './props/users';
import InitialState from './props/initialstate';
import ChangeState from './props/changestate';
import OptimizedChangeState from './props/moresimplified';


class App extends Component {
  render() {
    return (
      <div>
         <InitialState></InitialState>
         <ChangeState></ChangeState>
         <OptimizedChangeState></OptimizedChangeState>
      </div>
    );
  }
}

export default App;
