import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import Intro from "./components/Intro/Intro";
import Portfolio from './containers/Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Intro/>
            <Portfolio />
        </Layout>
      </div>
    );
  }
}

export default App;
