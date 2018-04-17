// XHR request Web Api or Remote Api Integration
// axios is library with promses to fetch web api data 
// bind to the component


var EbayComponent= React.createClass({
    getInitialState:function(){
            return {
                products:[]
            }
    },

    //component lifecycle hook
    componentDidMount:function(){
             // Make a request for a user with a given ID
               var _this = this;
             
             // promise to fetch all the records
             this.serverRequest=axios.get
             ('https://raw.githubusercontent.com/awasekhirni/jsondata/master/ebayproducts.json')
                .then(function (response) {
                console.log(response);
                _this.setState({products:response.data});
                })
                .catch(function (error) {
                console.log(error);
                });

                //axios.put
                //axios.post
                //axios.delete

             },

    render:function(){        
        var productPrinter  = this.state.products.map(function(product){
            return(
                <div>
                <div>name: {product.name} </div>
                <div>image: <img src ={product.image} alt=""/></div>
                <div>description: {product.description}</div>
                <div>category: {product.category}</div>
                <div>quantity: {product.quantity}</div>
                <div>shipping: {product.shipping}</div>
                <div>location: {product.location}</div>
                <div>color: {product.color}</div>
                <div>link: {product.link}</div>
                <hr/>
                </div>
            );
        });

        return(
            <div>
                {productPrinter}
            </div>
        );
    }

});

ReactDOM.render(<EbayComponent/>, document.getElementById('react-app'));
