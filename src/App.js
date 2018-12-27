import React, { Component } from 'react';

import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
