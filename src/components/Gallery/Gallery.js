import React from 'react'; 
import styles from './Gallery.css';
import FontAwsomeIcon from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/fontawesome-free-solid';

const gallery = (props) => {

  const modal = (
    <div className={styles.Backdrop}>
      <div className={styles.Gallery}>
        <div>
        <FontAwsomeIcon icon={faWindowClose} size="lg"
                      className={styles.Close} 
                      onClick={props.close}/>
        </div>
        <div className={styles.GalleryBody}> 
          <div> Focal picture</div>
          <div className={styles.GallerySlides}> 
            <div> picture 1</div>
            <div> picture 2</div>
            <div> picture 3</div>
          </div>
        </div>
      </div>
     </div>

  );

  return (
    props.show ? modal : null    
   );
}

export default gallery;