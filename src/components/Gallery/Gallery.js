import React, { Component } from 'react'; 
import styles from './Gallery.css';
import FontAwsomeIcon from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/fontawesome-free-solid';

const importAll = (r) => {
  return r.keys().map(r);
}

class Gallery extends Component {

  componentDidMount() {
    console.log('Gallery [componentDidMount]');    
    console.log(this.props);    
  }
  componentDidUpdate() {
    console.log('Gallery [componentDidUpdated]');    
    console.log(this.props);        
  }


  render() {
    const images = importAll(require.context('../../assets/images/magzine', false, /\.(png|jpe?g|svg)$/));

    let testPic = images[0];
    const modal = (
      <div className={styles.Backdrop}>
        <div className={styles.Gallery}>
          <div>
          <FontAwsomeIcon icon={faWindowClose} size="lg"
                        className={styles.Close} 
                        onClick={this.props.close}/>
          </div>
          <div className={styles.GalleryBody}> 
            <img src={testPic} alt={'http://via.placeholder.com/300x300'}/>
            {/* <div>Focus Picture</div> */}
            <div className={styles.GallerySlides}> 
              <img src={testPic} alt={''}/>
              <div> picture 1</div>
              <div> picture 2</div>
              <div> picture 3</div>
            </div>
          </div>
          <div></div>
        </div>
       </div>
  
    );

    return (
      this.props.show ? modal : null    
     );

  }

}

export default Gallery;