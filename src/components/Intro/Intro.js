import React from 'react';
import styles from './Intro.css' ;
import portraitImg from '../../assets/images/portrait_sm_sep.jpg';

const intro = (props) => {
  return (
      <section className={styles.Intro}>
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
  )
};

export default intro;