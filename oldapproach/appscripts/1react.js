//var React =  require('react');

//react component template
//es5.0 construct to create react component this is deprecated in react 16

//java script extension JSX, you embed html inside react code.
var AppComponent = React.createClass({
    
    //default method to be implemented // must be implemented
    render:function(){
        return(
            <div>
                <h1> Hello this is my first react component</h1>
            </div>
        );
    }
});

//binding to the view
ReactDOM.render(<AppComponent></AppComponent>, document.getElementById('react-app'));