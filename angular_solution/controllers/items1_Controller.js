flickrApp.controller('items1_Controller', ['flickr_Service',function(flickr_Service){ 

    //insert the data from the REST API request inside the container
    flickr_Service.insertData(4,8);

}]); 