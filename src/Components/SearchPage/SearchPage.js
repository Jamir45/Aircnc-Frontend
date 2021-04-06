import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Map from './GoogleMap/GoogleMap';
import SearchIcon from '@material-ui/icons/Search';
import { useContextData } from '../ContextProvider/ContextProvider';

const SearchPage = () => {
   // import user family details from localStorage
   const [familyData, setFamilyData] = useState({})
   useEffect(() => {
      const data = localStorage.getItem('userDetails') && JSON.parse(localStorage.getItem('userDetails'))
      setFamilyData(data)
   }, [])

   const {location, arrival, departure, adult, child} = familyData;
   const totalGuest = adult + child

   const startDate = new Date(arrival).toDateString()
   const Date1 = startDate.slice(4, 10)

   const endDate = new Date(departure).toDateString() 
   const Date2 = endDate.slice(4, 10)

   return (
      <>
      {
         familyData && <div className='container searchPage'>
         <div className='text-center pt-3'>
            <span className='titleBar'>
               <span> {location && location} </span>
               <span> {Date1 +'-'+ Date2} </span>
               <span> {totalGuest + 'Guests'} </span>
               <SearchIcon />
            </span>
         </div>
         <div className="row my-3">
            <div className="col-md-5">
               <Sidebar 
                  Date1={Date1}
                  Date2={Date2}
                  totalGuest={totalGuest}
                  location={location}
               />
            </div>
            <div className="col-md-7">
               <Map />
            </div>
         </div>
      </div>
      }
      </>
   );
};

export default SearchPage;