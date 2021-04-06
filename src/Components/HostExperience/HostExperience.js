import React from 'react';
import { Link } from 'react-router-dom';
import { useContextData } from '../ContextProvider/ContextProvider';
import BookedPlace from './BookedPlace/BookedPlace';

const HostExperience = () => {
   const {toastMessage, bookedData} = useContextData()

   return (
      <div className='container'>
         {toastMessage()}
         <div className="row my-5">
            {
               bookedData && bookedData.error ? <div className='text-center mt-5 pt-5'>
                  <h1>{bookedData.error}</h1>
                  <Link to='/login'><h4>Log In</h4></Link>
               </div> : 
               <div className='text-center mb-3'>
                  <h4>List of Your Booked Place</h4>
               </div>
            }
            {
               bookedData && bookedData.length !== 0 && !bookedData.error && bookedData.map( data => <BookedPlace data={data} />) 
            }
            {
               bookedData && bookedData.length === 0 && !bookedData.error &&
               <div className='text-center mt-5 pt-5'>
                  <h2>Your are Not Booked Any Place Still Now</h2>
                  <Link to='/'><h4>Click Here to Book Your Favorite Place.</h4></Link>
               </div>
            }
         </div>
      </div>
   );
};

export default HostExperience;