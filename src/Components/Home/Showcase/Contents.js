import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const Contents = ({data, Class}) => {
   const {id, image, title, location, price, rating,} = data
   
   return <div className={Class === 'contentBoxSmall' ? "col-md-3" : "col-md-4"}>
      <div className={Class}>
         <img className="img-fluid" src={image} alt=""/>
         <small> {location} </small>
         <p> {title} </p>
         <span> ${price} Per Person</span><br/>
         <span className='Star'> 
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon /> 
            {rating} 
         </span>
      </div>
   </div>
};

export default Contents;