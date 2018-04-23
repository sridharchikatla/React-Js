import React, {Component} from 'react';
import User from './user';


class InitialState extends Component{
    state ={
        userslist:[
            { name:"John2", age:"20" },
            { name:"John3", age:"30" },
            { name:"John4", age:"40" },
            { name:"John5", age:"50" },
            { name:"John6", age:"60" }
        ],

        Title : "Reading Initial State of the Component"
    }
    render(){
        return(
            <div>
                <h2>{this.state.Title}</h2>
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

export default InitialState;
