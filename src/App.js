import React, {createContext, useReducer, useContext} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signin from './views/Sign_in'
import Signup from './views/Sign_up'
import Home from './views/Home'
import PageNotFound from './views/PageNotFound'



//modificacion
const Routing = () => {
  return (
      <div>
        <Switch>
            <Route exact path="/" component={Home}>
              <Home />
            </Route>
            <Route exact path="/login" component={Signin}>
              <Signin />
            </Route>
            <Route exact path="/register" component={Signup}>
              <Signup />
            </Route>
            <Route component={PageNotFound}/>
        </Switch>
      </div>
   
  );
};


function App() {
 
  return (
    <Router>
      <Routing/>
    </Router>

  )
}
export default App;