import React from 'react';
import { useContextData } from '../ContextProvider/ContextProvider';
import Showcase from './Showcase/Showcase';
import Sidebar from './Sidebar/Sidebar';

const Home = () => {
   const {toastMessage} = useContextData()

   return (
      <div className='container'>
         {toastMessage()}
         <div className="row mb-5">
            <Sidebar></Sidebar>
            <div className="col-md-8">
               <Showcase></Showcase>
            </div>
         </div>
      </div>
   );
};

export default Home;