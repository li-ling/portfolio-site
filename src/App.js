import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import Intro from "./components/Intro/Intro";
import Portfolio from './containers/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Intro/>
            <Portfolio />
            <Contact />
        </Layout>
      </div>
    );
  }
}

export default App;
