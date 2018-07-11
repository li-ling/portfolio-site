import React, { Component, Fragment } from 'react'; 
import styles from './Tile.css';
import Gallery from '../../components/Gallery/Gallery';

class Tile extends Component {

  state = {
    showGallery: false
  }

  onTileClick = (tile) => {
    this.setState({showGallery: true});

    document.body.style.overflow = 'hidden';
    document.body.scroll = "no";        
  }

  onCloseWindowHandler = () => {
    this.setState({showGallery: false});        

    document.body.style.overflow = 'auto';
    document.body.scroll = "yes";                
}


  render(){
    const galleryModal = this.state.showGallery ? (
      <Gallery 
              close={this.onCloseWindowHandler} 
              galleryName={ this.props.galleryName }/>
    )  : null;

  return (
    <Fragment>
      {galleryModal}
    <div className={styles.Tile} onClick={this.onTileClick}>
        <img src={this.props.thumbUrl} alt={this.props.title}/>
        <h3>{this.props.title}</h3>
        <h4>{this.props.subTitle}</h4>             
    </div>
    </Fragment>
  )
}
};

export default Tile;