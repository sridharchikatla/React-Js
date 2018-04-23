import React, {Component} from 'react';
import User from './user';


class OptimizedChangeState extends Component{
    state ={
        userslist:[
            { name:"Jhon", age:20 },
            { name:"Jack", age:30 },
            { name:"James", age:40 },
            { name:"Creeed", age:50 },
            { name:"Neemds", age:60 }
        ],

        newTitle : "Changing State of a Component - Optimized"
    }
    MakeMeYounger=()=>{
         const newState = this.state.userslist.map((user)=>{
            const tempState = user;
            tempState.age -= 10;
            return tempState;
         })
        this.setState({
            newState
        }) 
    }

    MakeMeOlder=()=>{
        const newState = this.state.userslist.map((user)=>{
            const tempState = user;
            tempState.age += 10;
            return tempState;
        });
        this.setState({
            newState
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.newTitle}</h2>
                <button onClick={this.MakeMeYounger}>Decrease age</button>
                <br/>
                <br/>
                <button onClick={this.MakeMeOlder}>Increase age</button>
                <br/>
                <br/>
                {
                    this.state.userslist.map((user)=>{
                        return<User age={user.age}>{user.name}</User>
                    })
                }
            </div>
        )
    }
}

export default OptimizedChangeState;
