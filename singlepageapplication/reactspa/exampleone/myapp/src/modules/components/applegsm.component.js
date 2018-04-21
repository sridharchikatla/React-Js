import React, {Component} from 'react';
import SharedServices from '../../services/sharedservices';

class ApplegsmComponent extends Component{
    constructor(props){
        super(props);
        this.state={
          apples:[]
        };
        this.ss=new SharedServices();
     }
 
     // component lifecyle hooks
     componentDidMount(){ 
         this.ss.fetchappledata(this.computeUpdateState)    
     }
 
     computeUpdateState=(results)=> this.setState({
         apples:results
     });


     render()
     {
         const applePrinter = this.state.apples.map(function(apple){
             return(
                 <div>
                    <div>Model:{apple.id}</div>
                    <div>Name:{apple.name}</div>
                    <div>Slug:{apple.slug}</div> 
                    <div>Image:<image src={apple.image}/></div> 
                    <div>Description:{apple.description}</div> 
                     <hr/>
                 </div>
             );
         });
         return(
             <div>{applePrinter}</div>
         );
     }
}

export default ApplegsmComponent;
