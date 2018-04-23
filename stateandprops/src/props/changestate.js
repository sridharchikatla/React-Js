import React, {Component} from 'react';
import User from './user';


class ChangeState extends Component{
    state ={
        userslist:[
            { name:"John2", age:20 },
            { name:"John3", age:30 },
            { name:"John4", age:40 },
            { name:"John5", age:50 },
            { name:"John6", age:60 }
        ],

        newTitle : "Changing State of a Component"
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
                <User age={this.state.userslist[0].age}>{this.state.userslist[0].name} </User>
                <User age={this.state.userslist[1].age}>{this.state.userslist[1].name} </User>
                <User age={this.state.userslist[2].age}>{this.state.userslist[2].name} </User>
                <User age={this.state.userslist[3].age}>{this.state.userslist[3].name} </User>
                <User age={this.state.userslist[4].age}>{this.state.userslist[4].name} </User>
                <hr/>   
            </div>
        )
    }
}

export default ChangeState;
