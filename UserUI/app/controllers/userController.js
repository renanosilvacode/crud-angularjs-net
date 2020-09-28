app.controller("userController", function ($scope, $http) {

    $scope.users = [];
    $scope.errorMessage
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

    $scope.getUser = function (id) {
        $http({
            method: "GET",
            url: $scope.BaseUrlApi + "users/" +  id
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
            data: JSON.stringify(user)
        }).then(function mySuccess(response) {
            $scope.user = response.data;
            console.log($scope.user);
        }, function myError(response) {
            $scope.errorMessage = response.statusText;
        });
    }

    $scope.updateUser = function (user) {
        $http({
            method: "PUT",
            url: $scope.BaseUrlApi + "users",
            data: JSON.stringify(user)
        }).then(function mySuccess(response) {
            $scope.user = response.data;
            console.log($scope.user);
        }, function myError(response) {
            $scope.errorMessage = response.statusText;
        });
    }


});