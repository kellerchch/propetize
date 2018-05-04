import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo"/>  */}
          <h1>Propetize</h1> <h3>"Monetize your property and services"</h3>
        </header>
         {/* This is how we conditionally show the nav. Luke helped and we concluded that this.props.location.pathname was the right place to get the props by console logging this.props. React-router is pushing props to us and it gives us history, location and match. This conditional rendering doc helped a lot https://reactjs.org/docs/conditional-rendering.html. We also looked at docs here: https://reacttraining.com/react-router/web/example/custom-link. Null is the way to say don't show the nav if we are just at the /   */}
         {/* {this.props.location.pathname !== '/' ? <Nav /> : null} */}
         <div>
           <Nav />
        </div>
        <div className="page-title">
          { Routes }
        </div>
      </div>
    );
  }
}

export default App;
