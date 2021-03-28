import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import { useContextData } from '../../../ContextProvider/ContextProvider';

const TellUs = () => {
   const {setFormData} = useContextData()
   const { register, handleSubmit, watch, errors } = useForm();
   const onSubmit = data => {
      console.log(data)
      setFormData(data)
   };

   return (
      <form className="TellUsForm" onSubmit={handleSubmit(onSubmit)}>
         <div className='text'>
            <textarea 
               name="tellUs" 
               placeholder='example: Hello, Can we spend night at your resort'
               ref={register({ required: true })} 
               rows="6" 
            />
            {errors.tellUs && <span>This field is required</span>}
         </div>
         <Button 
            variant="contained" 
            color="primary"
            type="submit"
         >
            Continue
         </Button>
      </form>
   );
};

export default TellUs;