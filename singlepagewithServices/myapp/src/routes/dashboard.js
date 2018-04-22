import React, {Component} from 'react';


import Navigations from './navigation.js';
import RouteComponent from './route.js';

class DashboadComponent extends Component{
    render(){
        return(
            <div>
                <Navigations></Navigations>
                <hr/>
                <RouteComponent></RouteComponent>
            </div>
        );
    }
}

export default DashboadComponent;