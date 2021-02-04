import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutPage from './AboutPage';
import NavBar from './components/NavBar';
import HomaPage from './HomePage';
import LoginPage from './LoginPage';

const AppRouter = () => {
  return (  
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/home' component={HomaPage}/>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/about' component={AboutPage}/>
        </Switch>
      </div>
    </Router>
  );
}
 
export default AppRouter;