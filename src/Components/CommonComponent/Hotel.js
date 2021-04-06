import React from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@material-ui/icons/Star';

const Hotel = (props) => {
   const {id, image, title, detail, facility, commitment, rating, price} = props.hotelsData || props.hotel

   return (
      <div className="row Hotel">
         <div className="col-5 px-0">
            <img className='img-fluid' src={image} alt=""/>
         </div>
         <div className="col-7">
            <Link to={!props.hotel && `hotel-details/${id}`}>
               <h6> {title} </h6>
               <p>{detail}</p>
               <p>{facility}</p>
               <p>{commitment}</p>
            </Link>
            <div className='d-flex justify-content-between'>
               <span><StarIcon /> {rating}</span>
               <span>${price}/night</span>
            </div>
         </div>
      </div>
   );
};

export default Hotel;