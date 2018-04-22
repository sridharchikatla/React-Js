import React, {Component} from 'react';
import SharedServices from '../../services/sharedservice';

class TravelComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            travels:[]
        };
        this.ss=new SharedServices();
    }
 
    //component life cycle hooks 
    componentDidMount(){
     this.ss.getTravelAgencyDate(this.computeUpdateState);
     
    }
 
    // update the state of the component using this.setState
   computeUpdateState=(results)=>this.setState({
             travels:results
   });

    render(){
        const TravelPrinter = this.state.travels.map(function(travel){
            return(
            <div>
                <div>Id :{travel.id}</div>
                <div>Name :{travel.name}</div>
                <div>Dailytrips :{travel.dailytrips}</div>
                <div>Turnover :{travel.turnover}</div>
                <div>Domestic-trips :{travel.Domestictrips}</div>
                <div>International-trips:{travel.Internationaltrips}</div>
                <div>Rating :{travel.rating}</div>
                <div>Description :{travel.description}</div>
                <hr/>
                </div>
               
            )
        });

        return(
            <div>{TravelPrinter} </div>
        )
    }
}

export default TravelComponent