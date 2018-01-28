flickrApp.config(function($routeProvider){  	
    $routeProvider
    .when('/', {     
               redirectTo: 'items0'
    })
    .when('/items0', {     
        templateUrl: './templates/items0.html',
        controller: 'items0_Controller',
        controllerAs: 'items0'
    })
    .when('/items1', {       
        templateUrl: './templates/items1.html',
        controller: 'items1_Controller',
        controllerAs: 'items1'
    })
    .when('/items2', {       
        templateUrl: './templates/items2.html',
        controller: 'items2_Controller',
        controllerAs: 'items2'
    })
    .when('/items3', {       
        templateUrl: './templates/items3.html',
        controller: 'items3_Controller',
        controllerAs: 'items3'
    })
    .when('/items4', {       
        templateUrl: './templates/items4.html',
        controller: 'items4_Controller',
        controllerAs: 'items4'
    })
});