import React, {Component} from 'react';
import SharedServices from '../../services/sharedservice';

class LoansComponent extends Component{   
    constructor(props){
        super(props);
        this.state={
            loans:[]
        };
        this.ss=new SharedServices();
    }
 
    //component life cycle hooks 
    componentDidMount(){
     this.ss.getLoansdata(this.computeUpdateState);
     
    }
 
    // update the state of the component using this.setState
   computeUpdateState=(results)=>this.setState({
                loans:results
   });

    render(){
        const LoansPrinter = this.state.loans.map(function(loan){
            return(
            <div>
                <div>Loan Id :{loan.guiid}</div>
                <div>Type :{loan.loanType}</div>
                <div>Interest :{loan.loanInterest}</div>
                <div>Tenure :{loan.loanTenure}</div>
                <div>Amount :{loan.loanAmount}</div>
                <div>EMI:{loan.loanEmi}</div>
                <div>Digisign:{loan.loanDigisign}</div>
                <hr/>
                </div>
               
            )
        });

        return(
            <div>{LoansPrinter} </div>
        )
    }
}

export default LoansComponent;