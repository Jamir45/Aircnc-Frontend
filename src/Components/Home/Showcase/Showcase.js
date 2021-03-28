import React, { useEffect, useState } from 'react';
import ExperiencesData from '../../../Data/ExperiencesData';
import HomeData from '../../../Data/HomeData';
import Contents from './Contents';

const Showcase = () => {
   const [experienceData, setExperienceData] = useState()
   const [homeData, setHomeData] = useState()
   useEffect(() => {
      setExperienceData(ExperiencesData)
      setHomeData(HomeData)
   }, [])

   return (
      <>
         <div className="row Showcase">
            <h4>Experiences</h4>
            {
               experienceData && experienceData.map(data => <Contents data={data} Class='contentBoxSmall'></Contents> )
            }
         </div>

         <div className="row Showcase">
            <h4>Homes</h4>
            {
               homeData && homeData.map(data => <Contents data={data} Class='contentBoxLarge'></Contents> )
            }
         </div>
      </>
   );
};

export default Showcase;