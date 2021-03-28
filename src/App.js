import React from 'react';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './SASS/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import { ContextDataProvider } from './Components/ContextProvider/ContextProvider';
import SearchPage from './Components/SearchPage/SearchPage';
import Signin from './Components/SignupAndSignin/Signin/Signin';
import Signup from './Components/SignupAndSignin/Signup/Signup';
import HotelDetails from './Components/HotelDetails/HotelDetails';


function App() {
  return (
    <ContextDataProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/hotel-details/:id">
            <HotelDetails />
          </Route>
        </Switch>
      </Router>
    </ContextDataProvider>
  );
}

export default App;
