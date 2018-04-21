import React, {Component} from 'react';
import SharedServices from '../../services/sharedservices';

class BanksComponent extends Component{
    constructor(props){
       super(props);
       this.state={
         banks:[]
       };
       this.ss=new SharedServices();
    }

    // component lifecyle hooks
    componentDidMount(){ 
        this.ss.fetchbanksdata(this.computeUpdateState)    
    }

    computeUpdateState=(results)=> this.setState({
        banks:results
    });
 
    render()
    {
        const bankPrinter = this.state.banks.map(function(bank){
            return(
                <div>
                    <div>IBAN:{bank.bankIban}</div>
                    <div>IFSC:{bank.bankIfsc}</div>
                    <div>Name:{bank.bankName}</div>
                    <div>Address:{bank.bankAddress}</div>
                    <div>Micr:{bank.bankMicr}</div>
                    <div>Loco:{bank.bankLogo}</div>    
                    <hr/>
                </div>
            );
        });
        return(
            <div>{bankPrinter}</div>
        );
    }
}

export default BanksComponent;