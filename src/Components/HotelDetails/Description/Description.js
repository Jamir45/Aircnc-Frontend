import { Avatar, makeStyles } from '@material-ui/core';
import React from 'react';
import { useContextData } from '../../ContextProvider/ContextProvider';
import Rowdra from '../../../images/rowdrow.jpg'
import StarIcon from '@material-ui/icons/Star';


const useStyles = makeStyles((theme) => ({
   large: {
     width: theme.spacing(7),
     height: theme.spacing(7),
     marginBottom: '-25px',
   }
 })); 

const Description = ({hotel}) => {
   const classes = useStyles();
   const {title, detail, rating, price, description} = hotel;

   const {familyData} = useContextData()
   const {location, arrival, departure, adult, child} = familyData;

   return (
      <div className="description">
         <div className='d-flex justify-content-between'>
            <h3> {title} </h3>
            <div>
               <Avatar src={Rowdra} className={classes.large} /><br/>
               <span>Rowdra</span>
            </div>
         </div>
         <div className="titleBottom">
            <p> {location} </p>
            <p> {detail} </p>
         </div>
         <p> {description} </p>
         <b>Reviews</b><br/>
         <span><StarIcon /> {rating}</span>
      </div>
   );
};

export default Description;