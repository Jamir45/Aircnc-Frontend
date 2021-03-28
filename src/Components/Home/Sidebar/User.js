import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const User = (props) => {
   const {title, person, age, Class, increaseDecrease} = props;
   return (
      <div className={`${Class} d-flex justify-content-between`}>
         <p>
            <b>{title}</b><br/>
            {Class === 'Child' && <small>{age}</small>}
         </p>
         <p> 
            <RemoveIcon onClick={() => {
               const personNumber = Class === 'Adult' ? person > 1 : person > 0
               return personNumber && increaseDecrease(person-1)
               }} 
            />
            <b className='number'>{person}</b>
            <AddIcon onClick={() => increaseDecrease(person+1)} />
         </p>
      </div>
   );
};

export default User;