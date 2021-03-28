import React, { useEffect } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import AgreeContinue from './StepComponent/AgreeContinue';
import TellUs from './StepComponent/TellUs';
import Payment from './StepComponent/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useContextData } from '../../ContextProvider/ContextProvider';


function StepperSection() {
   const {formData} = useContextData()

   const [activeStep, setActiveStep] = React.useState(0);
   const steps = getSteps();

   const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
   };
   useEffect(() => {
      if (formData) {
         setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
   }, [formData])

   function getSteps() {
      return ['Review House Rules', "Who's coming", 'Confirm and pay'];
    }

   // Stripe Payment Integration Key 
   const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
    
    function getStepContent(stepIndex) {
      switch (stepIndex) {
       case 0:
          return <AgreeContinue handleNext={handleNext} />;
       case 1:
          return <TellUs />;
       default:
          return <Elements stripe={stripePromise}>
             <Payment></Payment>
          </Elements>;
      }
    }

   return (
      <div className='StepperSection'>
         <Stepper className='Stepper' activeStep={activeStep} alternativeLabel>
            {
               steps.map((label) => (
                  <Step key={label}>
                     <StepLabel>{label}</StepLabel>
                  </Step>
               ))
            }
         </Stepper>
         <Typography>{getStepContent(activeStep)}</Typography>
      </div>
   );
}

export default StepperSection;