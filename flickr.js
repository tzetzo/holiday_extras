//one function only in global space and no vars in global space
function getFlickrData(response) {

        //calculates how many containers with 4 items each we need
        var items_divs = Math.ceil(response.items.length/4); 
        
        //create the number of containers as calculated above along with the corresponding pagination links
        for(var i=0,j=0;i<items_divs;i++){
            //append the containers that contain 4 items each:
            $("#flickr-container").append(      
                                    '<div class="row align-items-start items-container" data-show="items' + i + '">' + 
                                            '<div class="col item' + j + '"></div>' + 
                                            '<div class="col item' + (j+1) + '"></div>' +
                                            '<div class="col item' + (j+2) + '"></div>' +
                                            '<div class="col item' + (j+3) + '"></div>' +
                                    '</div>' 
                                 );
            //append the pagination links for each of the above containers:
            $("#flickr-pagination").append(      
                                    '<li class="page-item pag-link"><a class="page-link" href="#">' + (i+1) + '</a></li>'
                                 );
            j=j+4
        }
        
        //put the data from the REST API request inside the corresponding containers
        for (var i=0, j=response.items.length; i < j; i++) {
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
    
        //set the event listeners for the pagination links so that when one of them is clicked all are hided and only the clicked one is shown
        $(".page-link").click(function(event){
            
            //makes the background of the currently selected pagination link dark
            $(".page-link").removeClass("clicked");
            $(event.target).addClass("clicked");
            
            $(".items-container").hide();
            $('[data-show="items' + (Number($(this).text()) - 1) + '"]').css("display", "flex");         
        });
    
        //sets the background of the first pagination link when page loads
        $(".page-link:contains('1')").addClass("clicked");
        
    
}