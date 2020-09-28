app.controller("userController", function ($scope, $http, $routeParams) {

    $scope.users = [];
    $scope.user;
    $scope.errorMessage;
    $scope.BaseUrlApi = "https://localhost:5001/api/"

    $scope.getUsers = function () {

        $http({
            method: "GET",
            url: $scope.BaseUrlApi + "users"
        }).then(function mySuccess(response) {
            $scope.users = response.data;
            console.log($scope.users);
        }, function myError(response) {
            $scope.errorMessage = response.statusText;
        });
    }

    $scope.getUser = function () {
        let idUser = $routeParams.id;
        $http({
            method: "GET",
            url: $scope.BaseUrlApi + "users/" + idUser
        }).then(function mySuccess(response) {
            $scope.user = response.data;
            console.log($scope.user);
        }, function myError(response) {
            $scope.errorMessage = response.statusText;
        });
    }

    $scope.createUser = function () {
        $http({
            method: "POST",
            url: $scope.BaseUrlApi + "users",
            data: JSON.stringify($scope.user)
        }).then(function mySuccess(response) {
            $scope.user = response.data;
            console.log($scope.user);
        }, function myError(response) {
            $scope.errorMessage = response.statusText;
        });
    }

    $scope.updateUser = function () {
        $http({
            method: "PUT",
            url: $scope.BaseUrlApi + "users",
            data: JSON.stringify($scope.user)
        }).then(function mySuccess(response) {
            $scope.user = response.data;
            console.log($scope.user);
        }, function myError(response) {
            $scope.errorMessage = response.statusText;
        });
    }


});