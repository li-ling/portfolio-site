import React from 'react';
import styles from './Intro.css' ;
import portraitImg from '../../assets/images/portrait_sm_sep.jpg';

const intro = (props) => {
  return (
      <div className={styles.Intro}>
        <div className={styles.IntroContent}>
         <img src={portraitImg} alt="Me" />
         <div>
          <h1>Hi, my name is Li-Ling Chang.</h1>
          <p className={styles.SubTitle}>pronounced as Lee Ling Chang</p>
          <h3>I am a web developer who is passionate about creating simple and unique user experiences for everyday things.</h3>
          </div>
        </div>
      </div>
  )
};

export default intro;