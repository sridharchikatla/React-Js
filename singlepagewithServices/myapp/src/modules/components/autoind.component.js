import React, {Component} from 'react';
import SharedServices from '../../services/sharedservice';

class AutoIndComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            autoMobiles:[]
        };
        this.ss=new SharedServices();
    }
 
    //component life cycle hooks 
    componentDidMount(){
     this.ss.getAutoIndData(this.computeUpdateState);
     
    }
 
    // update the state of the component using this.setState
   computeUpdateState=(results)=>this.setState({
        autoMobiles:results
   });

    render(){
        const carsPrinter = this.state.autoMobiles.map(function(autoMobile){
            return(
            <div>
                <div> Id :{autoMobile.id}</div>
                <div>name :{autoMobile.name}</div>
                <div>turnover :{autoMobile.turnover}</div>
                <div>employess :{autoMobile.employess}</div>
                <div>address :{autoMobile.address}</div>
                <hr/>
                </div>
            )
        });

        return(
            <div>{carsPrinter} </div>
        )
    }
}

export default AutoIndComponent;