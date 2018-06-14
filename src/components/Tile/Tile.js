
import React from 'react'; 

const tile = (props) => {
  return (
    <div>
        <img src={props.thumbUrl} alt={props.title}/>
        <h3>{props.title}</h3>
        <h4>{props.subTitle}</h4>             
    </div>
  )
};

export default tile;