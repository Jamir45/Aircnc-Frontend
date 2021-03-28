import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';
import { useContextData } from '../../ContextProvider/ContextProvider';

const Sidebar = (props) => {
   const {Date1, Date2, totalGuest, location} = props;
   const {hotelsData} = useContextData()

   return (
      <>
         <small> {`252 stays ${Date1} - ${Date2}, ${totalGuest} guests`} </small>
         <h4>{`Stay in ${location}`}</h4>
         {
            hotelsData && hotelsData.map( data => {
               const {id, image, title, detail, facility, commitment, rating, price} = data
               return <div className="row Hotel">
                  <div className="col-5 px-0">
                     <img className='img-fluid' src={image} alt=""/>
                  </div>
                  <div className="col-7">
                     <Link to={`hotel-details/${id}`}>
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
            })
         }
      </>
   );
};

export default Sidebar;