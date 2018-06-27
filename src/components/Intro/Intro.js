import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import styles from './Intro.css' ;
import portraitImg from '../../assets/images/portrait_sm_sep.jpg';
import ScrollIntoView from '../../hoc/ScrollIntoView/ScrollIntoView';

class Intro extends Component {
  render(){
    return (
      <ScrollIntoView id={this.props.location ? this.props.location.hash : null}>
        <section className={styles.Intro} id="intro">
          <div className={styles.IntroContent}>
           <img src={portraitImg} alt="Me" />
           <div>
            <p>Hi, my name is</p>
            <h1>Li-Ling Chang</h1>
            <p>(pronounced Lee-Ling-Chang)</p>
            <h4>I am a web developer who is passionate about creating simple and unique user experiences for everyday things.
              I also enjoy designing graphics and illustrations.
            </h4>
            </div>
          </div>
        </section>
      </ScrollIntoView>
    )
  }
}

export default withRouter(Intro);