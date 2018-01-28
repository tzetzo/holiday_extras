flickrApp.controller('items4_Controller', ['flickr_Service',function(flickr_Service){ 

    //put the data from the REST API request inside the corresponding container
    flickr_Service.insertData(16,20);

}]); 