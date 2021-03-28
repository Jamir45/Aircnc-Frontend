import { Avatar } from '@material-ui/core';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useContextData } from '../ContextProvider/ContextProvider';

const Header = () => {
   const history = useHistory()
   const {user, signOut} = useContextData()

   return (
      <nav class="navbar navbar-expand-lg navbar-light">
         <div class="container container-fluid">
            <Link className="navbar-brand" to="/" >
               <h3>Aircnc</h3>
            </Link>

            <button 
               class="navbar-toggler" 
               data-bs-toggle="collapse" 
               data-bs-target="#navbarNavDropdown" 
               aria-controls="navbarNavDropdown" 
               aria-expanded="false" 
               aria-label="Toggle navigation"
            >
               <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
               <ul className="navbar-nav ms-auto">
                  <li className="nav-item active">
                     <Link className="nav-link" to="/">Host your home</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link"  to="/host-experience">Host your experience</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link"  to="/help">Help</Link>
                  </li>
                  {
                     !user && <li className="nav-item">
                     <Link className="nav-link"  to="/login">Login</Link>
                     </li>
                  }
               </ul>
               {
                  user && <> 
                     {
                     user.picture ? 
                     <Avatar className="userProfile" src={user.picture} />
                     : 
                     <span className="userName"> {user.name} </span>
                     }
                  </>
               }
               {
                  user ? 
                  <Link className="nav-link sigUpBtn" onClick={() => signOut(history)}>
                     Sign Out
                  </Link> 
                  : 
                  <Link className="nav-link sigUpBtn" to="/signup">Signup</Link>
               }
            </div>
         </div>
      </nav>
   );
};

export default Header;