<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>FLICKR TASK</title>
        <meta name="description" content="Flickr task provided by holidayextras">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="flickr.css?<?php echo time(); ?>">
        
    </head>
    <body>   
        <h5 class="flickr-heading container-fluid">Holiday Extras Task - Web Development Flickr Task</h5>
        <section class="ui-widget">
            <input id="photo_search" placeholder="Photo title"><button type="button" class="go"><i class="fa fa-search"></i></button>
        </section>

        <section id="flickr-container" class="container"></section>

        <nav class="flickr-pagination"><ul id="flickr-pagination" class="pagination"></ul></nav>

        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
        <script src="flickr.js?<?php echo time(); ?>"></script><!--defines the function that retrieves the data-->
        <script src="http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=getFlickrData"></script><!--requests the data--><!--https://mashupguide.net/1.0/html/ch08s07.xhtml-->
    </body>
</html>