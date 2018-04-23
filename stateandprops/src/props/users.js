import React, {Component} from 'react';
import User from './user';


class Users extends Component{
    state ={
        userslist:[
            { name:"John2", age:"20" },
            { name:"John3", age:"30" },
            { name:"John4", age:"40" },
            { name:"John5", age:"50" },
            { name:"John6", age:"60" }
        ],

        Title : "Users List"
    }
    render(){
        return(
            <div>
                <h1>{this.state.Title}</h1>
                <br/>
                <User age={this.state.userslist[0].age}>{this.state.userslist[0].name} </User>
                <br/>
                <User age={this.state.userslist[1].age}>{this.state.userslist[1].name} </User>
                <br/>
                <User age={this.state.userslist[2].age}>{this.state.userslist[2].name} </User>
                <br/>
                <User age={this.state.userslist[3].age}>{this.state.userslist[3].name} </User>
                <br/>
                <User age={this.state.userslist[4].age}>{this.state.userslist[4].name} </User>
                <br/>
                 
            </div>
        )
    }
}

export default Users;
