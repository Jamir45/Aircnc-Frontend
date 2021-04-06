import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContextData } from '../../../ContextProvider/ContextProvider';
import { Button, LinearProgress } from '@material-ui/core';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';


const Payment = ({hotel}) => {
   const history = useHistory()

   // import user family details from localStorage
   const [familyData, setFamilyData] = useState({})
   useEffect(() => {
      const data = localStorage.getItem('userDetails') && JSON.parse(localStorage.getItem('userDetails'))
      setFamilyData(data)
   }, [])

   const {toastMessage, user, formData, formLoader, setFormLoader, bookedData, setBookedData} = useContextData()
   const {name, email, picture} = user;
   const userDetails = {name, email, picture}

   const stripe = useStripe();
   const elements = useElements();
   const [orderData, setOrderData] = useState()
// Hello, we want to spend two nights at your resort.

   const handleSubmit = async (event) => {
      event.preventDefault();
      setFormLoader(true)
      const {error, paymentMethod} = await stripe.createPaymentMethod({
         type: 'card',
         card: elements.getElement(CardElement),
      });
      if (error) {
         toast.error(error.message)
      } else {
         toast.success('Payment Is Successful')
         const fullDetails = {...familyData, userDetails, hotel, userComment:formData.tellUs, paymentDetails: paymentMethod}
         setOrderData(fullDetails)
      }
   };

   useEffect(() => {
      if (orderData) {
         fetch('https://aircnc-backend-server.herokuapp.com/post-placeBooking', {
            method: 'POST',
            headers: {
               'Content-Type':'application/json',
               'authorization': sessionStorage.getItem('userToken')
            },
            body: JSON.stringify({placeBooking:orderData})
         })
         .then(res => res.json())
         .then(result => {
            console.log(result)
            setFormLoader(false)
            toast.error(result.error)
            if (result.success) {
               history.push('/host-experience')
               setBookedData([...bookedData, result.data])
               toast.success(result.success)
               localStorage.removeItem('userDetails')
            }
         })
      }
   }, [orderData])


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

         {
            formLoader && <LinearProgress className='my-3' />  
         }

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