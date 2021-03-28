import React from 'react';
import { useParams } from 'react-router-dom';
import { useContextData } from '../ContextProvider/ContextProvider';
import Calculation from './Calculation/Calculation';
import Description from './Description/Description'
import StepperSection from './StepperSection/StepperSection';

const HotelDetails = () => {
   const {id} = useParams()
   const {hotelsData, stepperOn} = useContextData()

   const hotel = hotelsData && hotelsData.find(data => data.id == id)

   return (
      <div className="container">
         <div className="row justify-content-center">
            <img className='col-12 col-sm-10' src={hotel && hotel.image} alt=""/>
         </div>
         <div className="row">
            <div className='col-md-1'></div>
            <div className="col-md-6">
               
               {stepperOn && <StepperSection />}
               {hotel && !stepperOn && <Description hotel={hotel} />}
               
            </div>
            <div className="col-md-4">
               {hotel && <Calculation hotel={hotel}></Calculation>}
            </div>
            <div className='col-md-1'></div>
         </div>
      </div>
   );
};

export default HotelDetails;