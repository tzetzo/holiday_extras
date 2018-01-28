flickrApp.controller('items2_Controller', ['flickr_Service',function(flickr_Service){ 

    //put the data from the REST API request inside the corresponding container
    flickr_Service.insertData(8,12);
    
}]); 