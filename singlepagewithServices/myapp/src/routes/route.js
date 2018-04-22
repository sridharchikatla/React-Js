import React, {Component} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import WelcomeComponent from '../modules/components/welcome.component';
import LoansComponent from '../modules/components/loans.component';
import CurrencyComponent from '../modules/components/currency.component';
import ShoppingComponent from '../modules/components/onlineshopping.component';
import AutoIndComponent from '../modules/components/autoind.component';
import PageNotFoundComponent from '../modules/components/pagenotfound.component';
import TravelComponent from '../modules/components/travel.component';

class RouteComponent extends Component{

    render(){
        return(
        <div>
            <HashRouter> 
            <Switch>
                <Route exact path = "/" component={WelcomeComponent}></Route>
                <Route path="/travel" component={TravelComponent}></Route>
                <Route path= "/loans" component={LoansComponent}></Route>
                <Route path= "/currency" component={CurrencyComponent}></Route>
                <Route path= "/shopping" component={ShoppingComponent}></Route>
                <Route path="/autoindustry" component={AutoIndComponent}></Route>
                <Route path="*" component={PageNotFoundComponent}></Route>
            </Switch>
            </HashRouter>
            
        </div>
        );
    }
}

export default RouteComponent;