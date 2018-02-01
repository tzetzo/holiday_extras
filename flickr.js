  var flickr = (function($){
      
        var flickr_obj = {};
      
        var availableTags = [];
        var save_item_number=null;
        var save_item_width=null;
        var save_item_height=null;
      
        flickr_obj.getFlickrData = function(response){
                
            //create the number of containers as calculated along with the corresponding pagination links
            appendContainers(response);

            //put the data from the REST API request inside the corresponding containers
            appendData(response);

            //set the event listeners for the pagination links and the search
            setEventListeners();

            //sets the background of the first pagination link when page loads
            $('.page-link:contains("1")').addClass('clicked');
            //set the hash to the first page
            window.location.hash = "#1";

            //jquery UI widget
            $('#photo_search').autocomplete({
              source: availableTags,classes: {
                "ui-autocomplete": "highlight"
              }
            });

        }
      
        function appendContainers(response){
            //calculates how many containers with 4 items each we need
            var items_divs = Math.ceil(response.items.length/4); 
            
            for(var i=0,j=1;i<items_divs;i++){
                //append the containers that contain 4 items each:
                $('#flickr-container').append(      
                                        '<div class="row align-items-start" data-show="items' + (i+1) + '">' + 
                                                '<div class="col item' + j + '"></div>' + 
                                                '<div class="col item' + (j+1) + '"></div>' +
                                                '<div class="col item' + (j+2) + '"></div>' +
                                                '<div class="col item' + (j+3) + '"></div>' +
                                        '</div>' 
                                     );
                //append the pagination links for each of the above containers:
                $('#flickr-pagination').append(      
                                        '<li><a class="page-link" href="#' + (i+1) + '">' + (i+1) + '</a></li>'
                                     );
                j=j+4;
            }
        }
        
        function appendData(response){
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

                $('.item' + (i+1)).append(      
                                        '<img class="img-responsive img-thumbnail" alt="'+ item.title + '" src="' + item.media.m + '"/>' + 

                                        '<div>' + 
                                        '<a href="' + item.link + '">' + item.title + '</a>' + 
                                        '<span> by </span>' + 
                                        '<a href="https://www.flickr.com/photos/' + item.author_id + '">' + item.author.replace(/nobody@flickr.com\s\(\"/g, "").replace(/\"\)/g, "") + '</a>' +
                                        '</div>' + 

                                        '<p><b>Description:</b> ' + description +

                                        '<p><b>Tags:</b> ' + tags + '</p>'
                                     );

                //construct the array containing the info for the available photo titles for the search field
                availableTags.push({label:item.title, value:item.title + " item" + (i+1)});
            }
        }
      
        function setEventListeners(){
            //set the event listener for the pagination links
            $('.page-link').click(function(event){
                $(window).scrollTop(0);
                //empty the search box
                $('#photo_search').val("");
                //check if there is item shown after using search
                if(save_item_number !== null){
                    $('.item' + save_item_number).addClass('col');
                    $('.item' + save_item_number).css({
                                                'position' : 'relative',  
                                                'z-index' : 'auto',           
                                                'background-color' : 'rgba(0, 0, 0, 0)',    
                                                'width' : 'auto',
                                                'height' : 'auto'
                                            });
                    save_item_number = null;
                }

                //makes the background of the currently selected pagination link dark
                $('.page-link').removeClass('clicked');
                $(event.target).addClass('clicked');

                //show only the selected items
                $('[data-show^="items"]').hide();
                $('[data-show="items' + Number($(this).text()) + '"]').css('display', 'flex');      

                //make sure the hash in the url corresponds to the hash of the selected pagination link
                window.location.hash = $(event.target).attr('href');
            });
            
            //set the event listener for the search button click
            $('.go').click(function(){
                var item_number = Number(($('#photo_search').val().match(/item\d+/)[0]).replace( /item/, ''));
                var items_number = Math.ceil(item_number/4);

                //go to the section where the searched photo is located
                $('[href="#' + items_number + '"]').click();

                //show only the searched item
                $('.item' + item_number).removeClass('col');
                $('.item' + item_number).css({
                                                'position' : 'absolute',  //relative
                                                'z-index' : '1',            //auto
                                                'background-color' : '#fff',    //rgba(0, 0, 0, 0)
                                                'width' : '100%',
                                                'height' : '100%'
                                            });
                //save the item width and height for restoring it later
                save_item_number = item_number;
                save_item_width = $('.item' + item_number).width();
                save_item_height = $('.item' + item_number).height();

            });
        }
      
        return flickr_obj;
})(jQuery);