<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>FLICKR TASK</title>
        <meta name="description" content="Flickr task provided by holidayextras">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="flickr.css">
    </head>
    <body>
        
        <h4 class="flickr-heading container-fluid">Holiday Extras Task - Web Development Flickr Task</h4>
        
        <div id="flickr-container" class="container"></div>
        
        <div class="pagination-background"><ul id="flickr-pagination" class="pagination"></ul></div>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="flickr.js"></script><!--defines the function that retrieves the data-->
        <script src="http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=getFlickrData"></script><!--requests the data--><!--https://mashupguide.net/1.0/html/ch08s07.xhtml-->
    </body>
</html>