import { Paper } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
   return (
      <div className='container'>
         <div className="text-center mt-5">
            <h3>Page Not Fount</h3>
            <Link to='/'>Back</Link>
         </div>
      </div>
   );
};

export default NotFound;