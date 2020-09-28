var app = angular.module("userApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/users.html",
            controller: "userController"
        })
        .when("/users", {
            templateUrl: "views/users.html",
            controller: "userController"
        })
        .when("/edit-user/:id", {
            templateUrl: "views/edit-user.html",
            controller: "userController"
        })
        .when("/user", {
            templateUrl: "views/user.html",
            controller: "userController"
        })
})