import { Paper } from '@material-ui/core';
import React from 'react';
import Hotel from '../../CommonComponent/Hotel';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const BookedPlace = ({data}) => {
   console.log(data)
   const {location, arrival, departure, adult, child, baby} = data;
   const totalGuest = adult + child

   const startDate = new Date(arrival).toDateString()
   const Date1 = startDate.slice(4)

   const endDate = new Date(departure).toDateString() 
   const Date2 = endDate.slice(4)

   return (
      <div className='row'>
         <div className="col-md-1"></div>
         <div className='col-md-10'>
            <Paper className="row my-3" elevation={3}>
               <div className='col-md-8'>
                  <Hotel hotel={data.hotel}/>
               </div>
               <div className='col-md-4 userDetails'>
                  <h6>Booked Details</h6>
                  <p>
                     <span>Adult: {adult} </span>
                     <span>Child: {child} </span>
                     <span>Baby: {baby} </span>
                  </p>
                  {/* <label htmlFor="date">Date</label> */}
                  <div id="date" className='d-flex justify-content-between'>
                     <span>{Date1}</span> 
                     <ArrowForwardIcon />
                     <span>{Date2}</span>
                  </div>
                  <small>
                     Booked ID: {data.bookedBy} 
                  </small><br/>
                  <small>
                     <b>Booked By:</b> {data.userDetails.name} 
                  </small>
               </div>
            </Paper>
         </div>
         <div className="col-md-1"></div>
      </div>
   );
};

export default BookedPlace;