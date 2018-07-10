import React, { Component } from 'react'; 
import styles from './Gallery.css';
import FontAwsomeIcon from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/fontawesome-free-solid';

const importAll = (r, filterKey) => {
    // console.log(r.keys());    
    // console.log(r.keys().filter(f => f.startsWith(`./${filterKey}/`)));
    
    let images = r.keys().filter(f => f.startsWith(`./${filterKey}/`));
  return images.map(r);
}

class Gallery extends Component {

  state = {
    images: [],
    focalImage: ""
  }

  componentDidMount() {
    // console.log('Gallery [componentDidMount]');      
    // console.log(this.props);        

    let newImages = importAll(require.context('../../assets/images/galleries', true, /\.(png|jpe?g|svg)$/)
    , this.props.galleryName);
    this.setState({images: newImages,
    focalImage: newImages[0]});

    document.addEventListener("keydown", this.escPressed.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escPressed, false);
  }

  componentDidUpdate(prevProps) {
    // console.log('Gallery [componentDidUpdated]');        
    // if(this.props.galleryName !== undefined && this.props.galleryName !== prevProps.galleryName){      
    //   console.log('loading image gallery: ' + this.props.galleryName);

    //   let newImages = importAll(require.context('../../assets/images/galleries', true, /\.(png|jpe?g|svg)$/)
    //                     , this.props.galleryName);
    //   this.setState({images: newImages,
    //                 focalImage: newImages[0]});
    // }    
  }

  escPressed = (e) => {
    if(e.keyCode === 27)
      (this.props.close)();
  }

  onChangeSlideImage = (i) => {
    this.setState({focalImage: this.state.images[i]})
  }

  preventDefault = (e) => {
    console.log(e.target);  
      e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const modal = (
      <div className={styles.Backdrop} onClick={this.props.close} onKeyDown={this.escPresse}>
        <div className={styles.Gallery} onClick={this.preventDefault}>
          <div>
          <FontAwsomeIcon icon={faWindowClose} size="lg"
                        className={styles.Close} 
                        onClick={this.props.close}/>
          </div>
          <div className={styles.GalleryBody}> 
            <img src={this.state.focalImage} alt=""/>
            <div className={styles.GallerySlides}> 
              {
               this.state.images.map( (m, i) =>
                <img src={m} alt="" key={i} onClick={()=>this.onChangeSlideImage(i)} />
                ) 
              }
            </div>
          </div>          
        </div>
       </div>
  
    );

    return modal;

  }

}

export default Gallery;