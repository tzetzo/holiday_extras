<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>FLICKR TASK</title>
        <meta name="description" content="Flickr task provided by holidayextras">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="./flickr.css?<?php echo time(); ?>">
    </head>
    <body ng-app="flickrApp">
        
        <h4 class="flickr-heading container-fluid">Holiday Extras Task - Web Development Flickr Task</h4>
        
        <div id="flickr-container" class="container" ng-view></div>
        
        <div class="pagination-background">
            <ul id="flickr-pagination" class="pagination" ng-controller="pagination">
                <li class="page-item pag-link"><a class="page-link" ng-click="click(0)" ng-class="{ 'clicked':clicked0 }"  href="/holidayextras/angular_solution/flickr.php#!/items0">1</a></li>
                <li class="page-item pag-link"><a class="page-link" ng-click="click(1)" ng-class="{ 'clicked':clicked1 }" href="/holidayextras/angular_solution/flickr.php#!/items1">2</a></li>
                <li class="page-item pag-link"><a class="page-link" ng-click="click(2)" ng-class="{ 'clicked':clicked2 }" href="/holidayextras/angular_solution/flickr.php#!/items2">3</a></li>
                <li class="page-item pag-link"><a class="page-link" ng-click="click(3)" ng-class="{ 'clicked':clicked3 }" href="/holidayextras/angular_solution/flickr.php#!/items3">4</a></li>
                <li class="page-item pag-link"><a class="page-link" ng-click="click(4)" ng-class="{ 'clicked':clicked4 }" href="/holidayextras/angular_solution/flickr.php#!/items4">5</a></li>
            </ul>
        </div>
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
       
        
        <script src="https://code.angularjs.org/1.6.8/angular.min.js"></script>
        <script src="https://code.angularjs.org/1.6.8/angular-route.min.js"></script>
        <script src="./js/flickrApp.js?<?php echo time(); ?>"></script>
        <script src="./js/flickrRoutes.js?<?php echo time(); ?>"></script>
        <script src="./services/flickr_Service.js?<?php echo time(); ?>"></script>
        <script src="./controllers/items0_Controller.js?<?php echo time(); ?>"></script>
        <script src="./controllers/items1_Controller.js?<?php echo time(); ?>"></script>
        <script src="./controllers/items2_Controller.js?<?php echo time(); ?>"></script>
        <script src="./controllers/items3_Controller.js?<?php echo time(); ?>"></script>
        <script src="./controllers/items4_Controller.js?<?php echo time(); ?>"></script>
        <script src="./controllers/pagination.js?<?php echo time(); ?>"></script>
        
        <script src="http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=getFlickrData"></script><!--requests the data--><!--https://mashupguide.net/1.0/html/ch08s07.xhtml-->
        
    </body>
</html>