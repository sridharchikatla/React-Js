import React, {Component} from 'react';
import SharedServices from '../../services/sharedservices';

class BookComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            books:[]
        };
        this.ss=new SharedServices();
    }

 //component life cycle hooks 
   componentDidMount(){
    this.ss.fetchbookdata(this.computeUpdateState);  
   }

   // update the state of the component using this.setState
  computeUpdateState=(results)=>this.setState({
      books:results
  });

//    ComponentWillMount(){

//    }

//    componentDidUpdate(){

//    }

//    shouldComponentUpdate(){

//    }
//    componentDidCatch(){

//    }
  
//    componentWillReceiveProps(){

//    }

//    componentWillUnmount(){

//    }

//    componentWillUpdate(){

//    }

   

    render(){

        //iteration by fetching the state 
        const BooksPrinter = this.state.books.map(function(book){
            return(
                <div>
                    <div>Author:{book.author}</div>
                    <div>Country:{book.country}</div>
                    <div>Image: <img src={book.imageLink}/></div>
                    <div>Language:{book.language}</div>
                    <div>Link:{book.link}</div>
                    <div>Pages:{book.pages}</div>
                    <div>Title:{book.title}</div>
                    <div>Year:{book.year}</div>
                    <hr/>
                </div>
            );
        });

       return(<div>
        {BooksPrinter}
    </div>);
    }
}

export default BookComponent;