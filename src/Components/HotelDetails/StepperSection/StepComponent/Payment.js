import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContextData } from '../../../ContextProvider/ContextProvider';
import { Button } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';


const Payment = () => {
   const history = useHistory()
   const {toastMessage, familyData, formData} = useContextData()

   const stripe = useStripe();
   const elements = useElements();
   const [orderData, setOrderData] = useState()

   const handleSubmit = async (event) => {
      event.preventDefault();
      const {error, paymentMethod} = await stripe.createPaymentMethod({
         type: 'card',
         card: elements.getElement(CardElement),
      });
      if (error) {
         toast.error(error.message)
      } else {
         toast.success('Payment Is Successful')
         const fullDetails = {...familyData, userComment:formData, paymentDetails: paymentMethod}
         setOrderData(fullDetails)
         if (paymentMethod) {
            history.push('/')
            localStorage.removeItem('userDetails')
         }
      }
   };


   return (
      <form className='Payment' onSubmit={handleSubmit}>
         {toastMessage()}
         <div className='membershipForm py-5'>
            <div className='text-center'>
               <h4 className='pb-3'>Payment With Credit Card</h4>
            </div>
            <label htmlFor="cardInput">Card Number</label>
            <CardElement id="cardInput" />
         </div>

         <div className='payBtn'>      
            <Button 
               type="submit" 
               variant="contained" 
               color="primary"
            >
               Continue to Pay
            </Button>
         </div>
      </form>
   );
};

export default Payment;