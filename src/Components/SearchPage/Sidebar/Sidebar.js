import React from 'react';
import { Link } from 'react-router-dom';
import { useContextData } from '../../ContextProvider/ContextProvider';
import Hotel from '../../CommonComponent/Hotel';

const Sidebar = (props) => {
   const {Date1, Date2, totalGuest, location, hotel} = props;
   const {hotelsData} = useContextData()

   return (
      <>
         <small> {`252 stays ${Date1} - ${Date2}, ${totalGuest} guests`} </small>
         <h4>{`Stay in ${location}`}</h4>
         {
            hotelsData && hotelsData.map(data => <Hotel hotelsData={data}/>)
         }
      </>
   );
};

export default Sidebar;