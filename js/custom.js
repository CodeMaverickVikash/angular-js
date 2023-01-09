var myModule = angular.module('nameOfModule', [])

// $scope is predefined keyword
// $location is built-in service, to get the current location or page location
// $timeout is built-in service, to delay the task
myModule.controller('nameOfController', function($scope, $location, $timeout, $interval) {
    console.log($location.absUrl());
    console.log($location.protocol());
    console.log($location.host());
    console.log($location.port());

    $timeout(function() {
        console.log('This will display after 3 seconds');
    });

    $scope.afterClick = function() {
        console.log('Btn clicked');
    }

    $interval(()=> {
        $scope.time = new Date().toLocaleTimeString();
    }, 1000);

    console.log($scope);
    $scope.whatIsScope = 'The scope is the binding part between the HTML (view) and the JavaScript (controller).';
    console.log($scope.whatIsScope);

    $scope.funcAddedToScope = function() {
        console.log('Something here');
        return 'returned something';
    }

    $scope.arrClr = ['red', 'blue', 'pink', 'black', 'Yello'];
})


myModule.run(function($rootScope) {
    $rootScope.firstProgram = 'Hello world!';
}) 


myModule.directive('hindiTutorials', function() {
    var goingInCustomTag = "Custom tag demo or custom directive tags";

    return { template: goingInCustomTag };
})