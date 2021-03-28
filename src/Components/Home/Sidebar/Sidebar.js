import { Button, Fab, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import UserDetails from './UserDetails';
import SearchIcon from '@material-ui/icons/Search';
import { useContextData } from '../../ContextProvider/ContextProvider';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {
   const history = useHistory()
   const {adult, child, baby} = useContextData()

   const { register, handleSubmit, errors } = useForm();
   const onSubmit = data => {
      data.adult = adult
      data.child = child
      data.baby = baby
      localStorage.setItem('userDetails', JSON.stringify(data))
      if (data) {
         history.push('/search')
      }
   };

   return (
      <div className='col-md-4 userForm'>
         <p className='formTitle'>Where do you want to go?</p>

         <form onSubmit={handleSubmit(onSubmit)}>
            <Paper className='Paper' elevation={3} >
               <label htmlFor="location">Location</label>
               <input 
                  id="location"
                  type='text'
                  className="form-control" 
                  placeholder='exp: Sylhet, Bangladesh'
                  name="location" 
                  ref={register({ required: true })} 
               />
               {errors.location && <span>Location field is required</span>}
            </Paper>

            <div className="row">
               <div className='col-6'>
                  <Paper className='Paper' elevation={3} >
                     <label htmlFor="arrival">Arrival</label>
                     <input 
                        id="arrival"
                        type='date'
                        className="form-control" 
                        name="arrival" 
                        ref={register({ required: true })} 
                     />
                     {errors.arrival && <span>Required</span>}
                  </Paper>
               </div>

               <div className='col-6'>
                  <Paper className='Paper' elevation={3} >
                     <label htmlFor="departure">Departure</label>
                     <input 
                        id="departure"
                        type='date'
                        className="form-control" 
                        name="departure" 
                        ref={register({ required: true })} 
                     />
                     {errors.departure && <span>Required</span>}
                  </Paper>
               </div>
            </div>

            <UserDetails></UserDetails>
            
            <Button 
               className="searchBtn"
               type="submit" 
               variant="contained"
            >
               <SearchIcon /> Search
            </Button>
         </form>
      </div>
   );
};

export default Sidebar;