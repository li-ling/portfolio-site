
import React from 'react'; 

const tile = (props) => {
  return (
    <div>
        <img src={props.thumbUrl} alt={props.title}/>
        <h2>{props.title}</h2>
        <h4>{props.subTitle}</h4>             
    </div>
  )
};

export default tile;