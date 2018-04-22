import React, {Component} from 'react';
import SharedServices from '../../services/sharedservice';

class CurrencyComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            Currencies:[]
        };
        this.ss=new SharedServices();
    }
 
    //component life cycle hooks 
    componentDidMount(){
     this.ss.getCurrencyData(this.computeUpdateState);
     
    }
 
    // update the state of the component using this.setState
   computeUpdateState=(results)=>this.setState({
             Currencies:results
   });

    render(){
        const CurrencyPrinter = this.state.Currencies.map(function(currency){
            return(
            <div>
                <div>Currency Id :{currency.id}</div>
                <div>Name :{currency.name}</div>
                <div>City :{currency.city}</div>
                <div>Country :{currency.country}</div>
                <div>Country code :{currency.countrycode}</div>
                <div>Currency:{currency.curency}</div>               
                <hr/>
                </div>               
            )
        });

        return(
            <div>{CurrencyPrinter} </div>
        )
    }
}
export default CurrencyComponent;