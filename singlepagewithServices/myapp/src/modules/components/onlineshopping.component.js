import React, {Component} from 'react';
import SharedServices from '../../services/sharedservice';

class ShoppingComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            stores:[]
        };
        this.ss=new SharedServices();
    }
 
    //component life cycle hooks 
    componentDidMount(){
     this.ss.getShoppingData(this.computeUpdateState);
     
    }
 
    // update the state of the component using this.setState
   computeUpdateState=(results)=>this.setState({
            stores:results
   });

    render(){
        const GroceryPrinter = this.state.stores.map(function(store){
            return(
            <div>
                <div>itemcode:{store.itemcode}</div>
                <div>name :{store.name}</div>
                <div>price :{store.price}</div>
                <div>discount :{store.discount}</div>
                <div>isImported :{store.isImported}</div>
                <div>Organic:{store.Organic}</div>
                <div>description:{store.description}</div>
                <hr/>
                </div>
               
            )
        });

        return(
            <div>{GroceryPrinter} </div>
        )
    }
}

export default ShoppingComponent;