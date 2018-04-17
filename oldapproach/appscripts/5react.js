//two way data binding
// display updated state
// using props to render state injected in the component

// passing data from parent component to child component using props


//parent component is statefull 
var ParentComponent = React.createClass({
    getInitialState:function(){
        return{
            todotask:"",          
            taskId:"0"
        }       
    },

    changeState:function(evt){
        this.setState({
            todotask:evt.target.value,
            taskid:evt.target.value
        })

    },
    render:function() {
        return (
            <div>
                <ChildComponent todoTask={this.state.todotask}  taskId={this.state.taskid}
                 update={this.changeState}>
                </ChildComponent>
            </div>
        );
        
    }
});


// recieves the properties of the parent component

var ChildComponent = React.createClass({
    render:function(){
        return(
        <div>
            <div>
                <span>taskId: <input type="text" onChange={this.props.update}/> {this.props.taskId} </span>
            </div>
            <div>
                <span>todotask: <input type="text" onChange={this.props.update}/> {this.props.todotask} </span>
            </div>

        </div>
        );
    }
});

ReactDOM.render(<ParentComponent/>, document.getElementById('react-app'));