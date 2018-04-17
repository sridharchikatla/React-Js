

// oneway binding demo for each looping construct to render 
// list of objects similar to *ngFor in Angular
var UserComponent = React.createClass({
    render:function(){

    var userList=[{
            "id": 1,
            "first_name": "Ware",
            "last_name": "Harsant",
            "email": "wharsant0@bravesites.com",
            "gender": "Male",
            "ip_address": "90.42.17.245"
          }, {
            "id": 2,
            "first_name": "Vicki",
            "last_name": "Guice",
            "email": "vguice1@booking.com",
            "gender": "Female",
            "ip_address": "99.81.189.58"
          }, {
            "id": 3,
            "first_name": "Adria",
            "last_name": "Petticrow",
            "email": "apetticrow2@about.me",
            "gender": "Female",
            "ip_address": "130.229.244.33"
          }, {
            "id": 4,
            "first_name": "Eldon",
            "last_name": "Haythorn",
            "email": "ehaythorn3@weebly.com",
            "gender": "Male",
            "ip_address": "107.247.165.35"
          }, {
            "id": 5,
            "first_name": "Mordecai",
            "last_name": "Rolfi",
            "email": "mrolfi4@businessinsider.com",
            "gender": "Male",
            "ip_address": "82.244.195.77"
          }, {
            "id": 6,
            "first_name": "Enriqueta",
            "last_name": "Baynom",
            "email": "ebaynom5@whitehouse.gov",
            "gender": "Female",
            "ip_address": "123.17.102.248"
          }, {
            "id": 7,
            "first_name": "Gorden",
            "last_name": "Bassindale",
            "email": "gbassindale6@purevolume.com",
            "gender": "Male",
            "ip_address": "20.187.147.14"
          }, {
            "id": 8,
            "first_name": "Robinetta",
            "last_name": "Berardt",
            "email": "rberardt7@google.co.jp",
            "gender": "Female",
            "ip_address": "245.48.228.126"
          }, {
            "id": 9,
            "first_name": "Lyndsie",
            "last_name": "Motton",
            "email": "lmotton8@oakley.com",
            "gender": "Female",
            "ip_address": "97.175.23.178"
          }, {
            "id": 10,
            "first_name": "Chery",
            "last_name": "Sidsaff",
            "email": "csidsaff9@wunderground.com",
            "gender": "Female",
            "ip_address": "220.76.246.150"
          }];

          //iterate to pring userList

          var userPrinter = userList.map(function(user){
              return (
                  <div>
                    <div>id :{user.id}</div>
                    <div>first_name :{user.first_name}</div>
                    <div>last_name :{user.last_name}</div>
                    <div>email :{user.email}</div>
                    <div>gender :{user.gender}</div>
                    <div>ip_address :{user.ip_address}</div>
                    <hr/>
                  </div>
                  
              );

            });
          
            return(
                <div>
                    {userPrinter}
                </div>
            );
       
    }

});

ReactDOM.render(<UserComponent/>, document.getElementById('react-app'));