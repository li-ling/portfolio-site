
import React from 'react'; 
import styles from './Tile.css';

const tile = (props) => {
  return (
    <div className={styles.Tile}>
        <img src={props.thumbUrl} alt={props.title}/>
        <h3>{props.title}</h3>
        <h4>{props.subTitle}</h4>             
    </div>
  )
};

export default tile;