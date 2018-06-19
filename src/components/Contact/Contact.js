import React from 'react'; 
import styles from './Contact.css';
// import faStyles from '@fortawesome/fontawesome/styles.css';
import FontAwsomeIcon from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/fontawesome-free-brands';
import {faEnvelope} from '@fortawesome/fontawesome-free-solid';

const contact = (props) => {
  return (
    <section id="contact" className={styles.Contact}>
      <p>Li-Ling is currently working in Calgary, Canada.</p>
      <div>
        <a href="mailto:bundleofjoy@gmail.com">
          <FontAwsomeIcon className={styles.SocialIcon} icon={faEnvelope} size="2x"/>
        </a> 
        <a href="https://www.linkedin.com/in/li-ling-chang-ab20a047/" >
          <FontAwsomeIcon className={styles.SocialIcon} icon={faLinkedin} size="2x"/>
        </a>
      </div>
      <p>Copyright @ 2018 Li-Ling Chang</p>
    </section>
  )
};

export default contact;