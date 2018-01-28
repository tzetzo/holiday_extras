flickrApp.controller('pagination', ['$scope', '$location',function($scope, $location){ 
    
    //set the background of the currently active pagination link
    $scope['clicked'+ ($location.$$url).split("").pop()] = 1;
    
    //makes the background of the currently selected pagination link dark
    $scope.click = function(number){
        for(i=0;i<5;i++){
            $scope['clicked' + i] = 0;
        }
        $scope['clicked' + number] = 1;
    }
    
}]); 