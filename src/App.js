import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import Intro from "./components/Intro/Intro";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Intro/>
        </Layout>
      </div>
    );
  }
}

export default App;
