import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DashboardComponent from './routes/dashboard';

class App extends Component {
  render() {
    return (
      <div>
       <DashboardComponent>DashboardComponent</DashboardComponent>
      </div>
    );
  }
}

export default App;
