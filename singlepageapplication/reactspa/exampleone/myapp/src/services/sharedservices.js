import React from 'react';
import axios from 'axios';

class SharedServices {

    bookUrl   = "https://raw.githubusercontent.com/sridharchikatla/Json-Data/master/100book.json";
    lenovaUrl = "https://raw.githubusercontent.com/sridharchikatla/Json-Data/master/lenovagsmarena.json";
    appleUrl  = "https://raw.githubusercontent.com/sridharchikatla/Json-Data/master/apple-gsmarena.json";
    banksUrl  = "https://raw.githubusercontent.com/sridharchikatla/Json-Data/master/banks.json";


    //getebaydata
    fetchbookdata(callback) {
        axios.get(this.bookUrl).then(function (response) {
            callback(response.data)
        }).catch(function (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    callback(`\u2014`);
                }
            }
        });
    }

    fetchbanksdata(callback){
        axios.get(this.banksUrl).then(function(response){
            callback(response.data)
        }).catch(function(error){
            if(error.response){
                if(error.reponse.status=== 404){
                    callback('\u2015')
                }
            }
        });
    }

    fetchlevenodata(callback){
        axios.get(this.lenovaUrl).then(function (response) {
            callback(response.data)
        }).catch(function (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    callback(`\u2014`);
                }
            }
        });
    }

    fetchappledata(callback){
        axios.get(this.appleUrl).then(function (response) {
            callback(response.data)
        }).catch(function (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    callback(`\u2014`);
                }
            }
        });
    }
}

export default SharedServices;