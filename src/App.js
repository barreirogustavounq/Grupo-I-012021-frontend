import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signin from './views/Sign_in'
import Home from './views/Home'
import PageNotFound from './views/PageNotFound'
import Suscribe from './views/Suscribe';


const Routing = () => {
    return (
        localStorage.getItem('apiKey') ?
            <div>
                <Switch>
                    <Route exact path="/" component={Home}>
                        <Home/>
                    </Route>
                </Switch>
            </div> :
            <div>
                <Switch>
                    <Route exact path="/" component={Signin}>
                        <Signin/>
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
