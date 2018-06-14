import React from 'react';
import styles from './Intro.css' ;
import portraitImg from '../../assets/images/portrait_sm_sep.jpg';

const intro = (props) => {
  return (
      <section className={styles.Intro}>
        <div className={styles.IntroContent}>
         <img src={portraitImg} alt="Me" />
         <div>
          <h2>Hi, my name is</h2>
          <h1>Li-Ling Chang</h1>
          <p className={styles.SubTitle}>(Lee Ling Chang)</p>
          <h3>I am a web developer who is passionate about creating simple and unique user experiences for everyday things.</h3>
          </div>
        </div>
      </section>
  )
};

export default intro;