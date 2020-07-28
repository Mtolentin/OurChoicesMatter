import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import SideNavContainer from './sideNav/sideNav_container';
import MapContainer from './map/map_container';
import Footer from './footer/footer';
import ArticleIndexContainer from './articles/articles_index_container';


const App = () => (
  <div className="safetravels">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
      <div className="index-main">
        <ProtectedRoute path="/index" component={SideNavContainer} /> 
        <ProtectedRoute path="/index" component={MapContainer}/>
        <ProtectedRoute path="/index" component={ArticleIndexContainer} /> 
      </div>
      <Footer /> 
  </div> 
);

export default App;