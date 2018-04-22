import React from 'react';
import axios from 'axios';

class SharedServices{
    loansUrl = "https://raw.githubusercontent.com/sridharchikatla/Json-Data/master/loans.json";
    currencyUrl = "https://raw.githubusercontent.com/sridharchikatla/Json-Data/master/currency.json";
    autoUrl= "https://raw.githubusercontent.com/sridharchikatla/Json-Data/master/motorIndustry.json";
    travelUrl="https://raw.githubusercontent.com/sridharchikatla/Json-Data/master/travelagency.json";
    shopUrl ="https://raw.githubusercontent.com/sridharchikatla/Json-Data/master/buyonline.json";

    getLoansdata(callback){
        axios.get(this.loansUrl).then(function(response){
            callback(response.data)
        }).catch(function(error){
            if(error.response){
                if(error.response.status===404){
                    callback(`\u2014`);
                }
            }
        });
    }

    getShoppingData(callback){
        axios.get(this.shopUrl).then(function(response){
            callback(response.data)
        }).catch(function(error){
            if(error.response){
                if(error.response.status=== 404){
                    callback('\u2099');
                }
            }
        });
    }
    
    getCurrencyData(callback){
        axios.get(this.currencyUrl).then(function(response){
            callback(response.data)
        }).catch(function(error){
            if(error.response){
                if(error.response.status=== 404){
                    callback('\u2014');
                }
            }
        });
    }

    getTravelAgencyDate(callback){
        axios.get(this.travelUrl).then(function(response){
            callback(response.data);
        }).catch(function(error){
            if(error.response){
                if(error.response.status=== 404){
                    callback('\u2018');
                }
            }
        });
    }

    getAutoIndData(callback){
        axios.get(this.autoUrl).then(function(response){
            callback(response.data)
        }).catch(function(error) {
            if (error.response) {
              if (error.response.status === 404) {
                callback(`\u2014`);
              }
            }
          });
    }
}

export default SharedServices;