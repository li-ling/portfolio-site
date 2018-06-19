import React from 'react'; 
import styles from './Contact.css';
import FontAwsomeIcon from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/fontawesome-free-brands';
import {faEnvelope} from '@fortawesome/fontawesome-free-solid';

const contact = (props) => {
  return (
    <section id="contact" className={styles.Contact}>
      <h5>I currently work in Calgary, Canada.</h5>
      <div>
        <a href="mailto:bundleofjoy@gmail.com">
          <FontAwsomeIcon className={styles.SocialIcon} icon={faEnvelope} size="2x"/>
        </a> 
        <a href="https://www.linkedin.com/in/li-ling-chang-ab20a047/" >
          <FontAwsomeIcon className={styles.SocialIcon} icon={faLinkedin} size="2x"/>
        </a>
      </div>
      <h5>Copyright @ 2018 Li-Ling Chang</h5>
    </section>
  )
};

export default contact;