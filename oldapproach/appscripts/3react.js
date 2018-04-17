//event binding demo
//intial state
// updating the

var CounterComponent = React.createClass({

    getInitialState:function(){
        return{counter:0};
    },


    // this.setState to updat the state of you component
    increment:function(){        
        this.setState({ counter:this.state.counter+1});
    },

    decrement:function(){        
        this.setState({ counter:this.state.counter-1});
    },

    // render default function to render or project the state


    render:function(){
        return(
            <div>
                <button name="cntrbtn1" id="cntrbtn1" onClick={this.increment}>IncrementValue</button> 
                <br/>
                <button name="cntrbtn2" id="cntrbtn2" onClick={this.decrement}>DecrementValue</button>
                <div><h1>result:{this.state.counter}</h1></div>
            </div>
        );
    }

});

ReactDOM.render(<CounterComponent/>, document.getElementById('react-app'));
