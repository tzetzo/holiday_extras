flickrApp.controller('pagination', ['$scope',function($scope){ 
    
    //set the background of the first link dark by default as its URL is the first shown
    $scope['clicked0'] = 1;
    
    //makes the background of the currently selected pagination link dark
    $scope.click = function(number){
        for(i=0;i<5;i++){
            $scope['clicked' + i] = 0;
        }
        $scope['clicked' + number] = 1;
    }
    
}]); 