import React, {Component} from 'react';
import SharedServices from '../../services/sharedservices';

class LenovaComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            lenmobiles:[]
        };
        this.ss=new SharedServices();
    }

 //component life cycle hooks 
   componentDidMount(){
    this.ss.fetchlevenodata(this.computeUpdateState);  
   }

   // update the state of the component using this.setState
  computeUpdateState=(results)=>this.setState({
    lenmobiles:results
  });

  render(){

    //iteration by fetching the state 
    const LenovaPrinter = this.state.lenmobiles.map(function(lenmobile){
        return(
            <div>
                <div>Model:{lenmobile.id}</div>
                <div>Name:{lenmobile.name}</div>
                <div>Slug:{lenmobile.slug}</div>
                <div>Image:<image src={lenmobile.image}/></div> 
                <div>Description:{lenmobile.description}</div> 
                <hr/>
            </div>
        );
    });

   return(<div>{LenovaPrinter}</div>);
  }

}

export default LenovaComponent;