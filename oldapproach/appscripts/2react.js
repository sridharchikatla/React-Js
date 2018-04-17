var PageComponent = React.createClass({
    render:function(){
        return(
            <div className="container">
                <TopComponent></TopComponent>
                <LogoComponent></LogoComponent>
                <NavComponent></NavComponent>
                <MainComponent></MainComponent>
                <ContextbarComponent></ContextbarComponent>
                <FooterComponent></FooterComponent>
                
            </div>
        );
    }
});

var TopComponent = React.createClass({
    render:function(){
        return(
            <div>
                <nav>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
                 </div>
                </nav>
            </div>
        );
    }
});

var LogoComponent = React.createClass({
    render:function(){
        return(
            <div className="row">
                   <h4>Logo </h4>
            </div>
        );
    }
});

var NavComponent = React.createClass({
    render:function(){
        return(
            <div>
                 <nav>
                    <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
});

var MainComponent = React.createClass({
    render:function(){
        return(
            <div className="row">  
                <SidebarComponent></SidebarComponent>
                <DashboardComponent></DashboardComponent>
            </div>
        );
    }
});

var SidebarComponent = React.createClass({
    render:function(){
        return(
           
            <div className="col s3 m3">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <span className="card-title">Sidebar</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
                </div>
            </div>
            </div>
             
        );
    }
});

var DashboardComponent = React.createClass({
    render:function(){
        return(
            
            <div className="col s9 m9">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                <span className="card-title">Dashboard</span>
                <p>I am a very simple card. I am good at containing small bits of information.
                I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
                </div>
            </div>
            </div>
            
        );
    }
});

var ContextbarComponent = React.createClass({
    render:function(){
        return(
            <div className="row">
                <div className="col s12 m12">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Contextbar</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                    <a href="#">This is a link</a>
                    <a href="#">This is a link</a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
});


var FooterComponent = React.createClass({
    render:function(){
        return(
            <div className = "row">
                 <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                        © 2014 Copyright Text
                        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                    </footer>
            </div>
       
        );
    }
});
ReactDOM.render(<PageComponent/>, document.getElementById('react-app'));