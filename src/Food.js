import React from 'react'
import "./Food.css";

const Food = (props) => {
  return (
    <div>
        <img src={props.img} alt="boy"/>
        <h1>{props.productName}</h1>
  
    </div>

  )
}

export default Food;