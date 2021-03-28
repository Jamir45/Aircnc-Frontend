import React from 'react';
import { Button } from '@material-ui/core';
import suitable from '../../../../images/suitable.png'
import pets from '../../../../images/pets.png'
import noParties from '../../../../images/forbidden.png'
import smoking from '../../../../images/smoking.png'

const AgreeContinue = ({handleNext}) => {
   return (
      <div className='agreeContinue'>
         <h4>Review House Rules</h4>
         <p>Things to keep in mind</p>
         <ul>
            <li><img src={suitable} alt=""/> Suitable for children</li>
            <li><img src={pets} alt=""/> Pets allowed</li>
            <li><img src={noParties} alt=""/> No parties and events</li>
            <li><img src={smoking} alt=""/> Smoking not allowed</li>
         </ul>

         <Button 
            variant="contained" 
            color="primary" 
            onClick={handleNext}
         >
            Agree&Continue
         </Button>
      </div>
   );
};

export default AgreeContinue;