import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useContextData } from '../ContextProvider/ContextProvider';

const PrivateRoute = ({ children, ...rest }) => {
   const {user} = useContextData()

   return (
     <Route
       {...rest}
       render={({ location }) =>
         (user || sessionStorage.getItem('userToken')) ? (
            children
         ) : (
           <Redirect
             to={{
               pathname: "/login",
               state: { from: location }
             }}
           />
         )
       }
     />
   );
 }

export default PrivateRoute;