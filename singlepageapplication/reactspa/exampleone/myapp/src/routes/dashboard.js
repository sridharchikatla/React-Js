import React, {Component} from 'react';
import Navigation from './navigation';
import RouteComponent from './route';

class DashboardComponent extends Component{

    render(){
        return(
        <div>
           <Navigation></Navigation>
           <RouteComponent></RouteComponent>

        </div>
        );
    }
}

export default DashboardComponent;