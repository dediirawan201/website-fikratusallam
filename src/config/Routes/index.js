
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {About, Contact, Program,MainApp} from '../../pages';

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/contact"><Contact/></Route>
                    <Route path="/about"><About/></Route>
                    <Route path="/program"><Program/></Route>
                    <Route path="/"><MainApp/></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;
