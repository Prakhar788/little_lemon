import React from 'react'
import food from "../assets/icons_assets/greek salad.jpg"


const Card = ({img,name,price,description}) => {
  return (
    <div className='container card'>
        <img src={food} alt={name} />
        <div className='price'>
        <h2>{name}
        </h2> 
        <p>
    {price}
        </p>
        </div>
        
        <p className='desc'>{description}</p>
        <h3>
        Out For delivery
        </h3>


    </div>
  )
}

export default Card