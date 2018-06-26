import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import Layout from './containers/Layout/Layout';
import Intro from "./components/Intro/Intro";
import Portfolio from './containers/Portfolio/Portfolio';
import About from './components/About/About';

class App extends Component {
  render() {
    const home = (
      <Fragment>
        <Intro/>
        <Portfolio />
      </Fragment>
    );    

    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/about" component={ About } />   
            <Route path="/" render={()=> home} />     
          </Switch>  
        </Layout>
      </div>
    );
  }
}

export default App;
