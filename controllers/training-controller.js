app.controller('IndexController', function ($scope) {
            
});

app.controller('ExpressionController', function ($scope) {
            
});

/** Filters Controller */
app.filter('propercase', function () {
    return function(str) {
        return str.replace(
            /\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
});

app.controller('FiltersController', function ($scope) {
    $scope.firstName = "Tuấn Anh";
    $scope.lastName = "Zippy";

    $scope.members = [
        {id: 1, name: 'phu luong', age: 31, sallary: 5000},
        {id: 2, name: 'diem ngo', age: 25, sallary: 1000},
        {id: 3, name: 'ngan le', age: 24, sallary: 1500},
        {id: 4, name: 'huu trang', age: 22, sallary: 2500},
        {id: 5, name: 'lap dam', age: 27, sallary: 4500}
    ];


    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});
/** End Filters Controller */

/** Directive Controller */
app.directive("megaadsTrainingDirective", function() {
    return {
        restrict : "EACM",
        replace: true,
        template : "<h1>MegaAds Training Plan!</h1>"
    };
});

app.directive('directive1', function(){
    return {
    restrict: "A",
    template: "<h3>This is directive1</h3>",
    priority: 1
}});
app.directive('directive2', function(){
    return {
    restrict: "A",
    template: "<h3>This is directive2</h3>",
    priority: 2
}});
app.directive('directive3', function(){
    return {
    restrict: "A",
    template: "<h3>This is directive3</h3>",
    priority: 1
}});

app.controller('DirectivesController', function () {

});
/** End Directive Controller */

app.controller('ModelController', function ($scope) {
    $scope.company = "MegaAds Co.Ltd";
});


/** Training Controller */
app.run(function ($rootScope) {
    $rootScope.color = 'blue';
});
app.controller('TrainingController', function ($scope) {
    $scope.firstName = "Technical";
    $scope.lastName = "Team";
    $scope.color = 'red';
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});
/** End Training Controller */


/** Services Controller */
app.factory('mathService', function() {
    var factory = {};
    factory.multiply = function(a, b) {
        return a * b;
    }
    return factory;
}); 
app.service('utilService', function() {
    this.toString = function(number) {
        return number.toString();
    }
});
app.controller('ServicesController', function ($scope, mathService, utilService) {
    $scope.mathService = mathService;
    $scope.utilService = utilService;
    //some things
});
/** End Services Controller */

/** Parameter Controller */
app.controller('ParameterController', function ($scope, $routeParams, $route) {
    $scope.titlePage = $route.current.titlePage;
    $scope.pageId = $routeParams.pageId;
});
/** End Parameter Controller */

/** Not Found Controller */
app.controller('NotFoundController', function () {

});
/** Not Found Controller */