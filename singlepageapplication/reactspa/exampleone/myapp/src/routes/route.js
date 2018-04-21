import React, {Component} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import WelcomeComponent from '../modules/components/welcome.component';
import BookComponent from '../modules/components/books.component';

import PageNotFoundComponent from '../modules/components/pagenotfound.component';
import BanksComponent from '../modules/components/banks.component';
import LenovaComponent from '../modules/components/lenovagsm.component';
import ApplegsmComponent from '../modules/components/applegsm.component';

class RouteComponent extends Component{

    render(){
        return(
        <div>
            <HashRouter> 
            <Switch>
                <Route exact path = "/" component={WelcomeComponent}></Route>
                <Route path= "/books" component={BookComponent}></Route>
                <Route path= "/banks" component={BanksComponent}></Route>
                <Route path= "/lenova" component={LenovaComponent}></Route>
                <Route path= "/apple" component={ApplegsmComponent}></Route>
                <Route path= "*" component={PageNotFoundComponent}></Route>
            </Switch>
            </HashRouter>
            
        </div>
        );
    }
}

export default RouteComponent;