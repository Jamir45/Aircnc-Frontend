import { Button, Paper } from '@material-ui/core';
import React from 'react';
import { useContextData } from '../../ContextProvider/ContextProvider';
import StarIcon from '@material-ui/icons/Star';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Calculation = ({hotel}) => {
   const {rating, price} = hotel;

   const {familyData, stepperOn, setStepperOn} = useContextData()
   const {adult, child, arrival, departure} = familyData
   const totalGuest = adult + child

   const Date1 = new Date(arrival).toLocaleDateString()
   const Date2 = new Date(departure).toLocaleDateString() 

   const startDate = new Date(arrival).getDate()
   const endDate = new Date(departure).getDate() 
   const days = parseFloat(endDate)-parseFloat(startDate)

   const daysFee = price*days

   return (
      <div>
         <Paper elevation={3} className='Calculation'>
            <div className='head'>
               <h5> ${price}/<span>night</span> </h5>
               <span> <StarIcon />{rating} </span>
            </div>

            <label htmlFor="date">Date</label>
            <div id="date" className='d-flex justify-content-between'>
               <span>{Date1}</span> 
               <ArrowForwardIcon />
               <span>{Date2}</span>
            </div>
            <label htmlFor="guest">Guest</label>
            <div id="date" className='d-flex justify-content-between'>
               <span>{totalGuest} Guest</span>
               <ExpandMoreIcon />
            </div>
            <ul>
               <li className="d-flex justify-content-between">
                  <span>${price} X {days}</span>
                  <span>${daysFee}</span>
               </li>
               <li className="d-flex justify-content-between">
                  <span>Cleaning Fee</span>
                  <span>$10</span>
               </li>
               <li className="d-flex justify-content-between">
                  <span>Service Fee</span>
                  <span>$20</span>
               </li>
               <li className="d-flex justify-content-between">
                  <b>Total</b>
                  <b>${daysFee+10+20}</b>
               </li>
            </ul>
            {
               !stepperOn &&
               <Button 
                  className="submitBtn"
                  type="submit" 
                  variant="contained"
                  onClick={() => setStepperOn(true)}
               >
                  Reserve
               </Button>
            }
         </Paper>
      </div>
   );
};

export default Calculation;