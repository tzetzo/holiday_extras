var flickrApp = angular.module('flickrApp', ['ngRoute']);        

function getFlickrData(response) {
    //save the data in sessionStorage for AngularJS to use later
    sessionStorage.setItem("response", JSON.stringify(response));
}