//inserts the data from the REST API request inside the corresponding containers
angular.module('flickrApp').factory('flickr_Service', [function(){
	var flickr_Service = {};
    
    var response = JSON.parse(sessionStorage.getItem("response"));
    
    flickr_Service.insertData = function(i,j){
        for (var i=i; i < j; i++) {
            var item = response.items[i];

            //extract only the description
            var descriptionArray = item.description.split("<p>");  //there are 3 paragraphs in each description
            for(var k=0; k<3; k++){         //removing the first 3 items in the array as only the 4th one is the description
                descriptionArray.shift();
            }
            //check if description is empty
            var description = descriptionArray.toString() === ""?"Sorry, no description yet":descriptionArray.toString();
            description = description.match(/image: Inline image/g) !== null?"Sorry, no description yet":description;

            //check if tags is empty
            var tags = item.tags === ""?"Sorry, no tags yet":item.tags.replace(/\s/g, ", ");

            $(".item" + i).append(      
                                    '<img class="img-responsive img-thumbnail" alt="'+ item.title + '" src="' + item.media.m + '"/>' + 

                                    '<div>' + 
                                    '<a href="' + item.link + '">' + item.title + '</a>' + 
                                    '<span> by </span>' + 
                                    '<a href="https://www.flickr.com/photos/' + item.author_id + '">' + item.author.replace(/nobody@flickr.com\s\(\"/g, "").replace(/\"\)/g, "") + '</a>' +
                                    '</div>' + 

                                    '<p class="flickr"><b>Description:</b> ' + description +

                                    '<p class="flickr"><b>Tags:</b> ' + tags + '</p>'
                                 );
        }
    };

	return flickr_Service;    
}]);