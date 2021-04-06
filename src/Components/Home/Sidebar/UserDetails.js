import React from 'react';
import { Paper, Button } from '@material-ui/core';
import User from './User';
import { useContextData } from '../../ContextProvider/ContextProvider';

const UserDetails = () => {
   const {adult, setAdult, child,  setChild, baby, setBaby} = useContextData()

   return (
      <Paper className='p-3 mt-3' elevation={3} >
         <div className='totalMember'>
            <span>Guests (Baby is not countable)</span><br/>
            <p>
               <b id='userFamily'>{adult && adult} ADULT {child} CHILD {baby} BABY</b>
            </p>
         </div>

         <User 
            Class='Adult' 
            title='ADULT' 
            person={adult}
            increaseDecrease={setAdult}
         />

         <User 
            Class='Child' 
            title='CHILD' 
            age='Age 5-18' 
            person={child}
            increaseDecrease={setChild}
         />

         <User 
            Class='Child' 
            title='BABY' 
            age='Younger Than 4' 
            person={baby}
            increaseDecrease={setBaby}
         />

         <div className="text-end">
            <Button 
               className='applyBtn' 
               variant="outlined" 
               color="primary"
            >
               Apply
            </Button>
         </div>
      </Paper>
   );
};

export default UserDetails;