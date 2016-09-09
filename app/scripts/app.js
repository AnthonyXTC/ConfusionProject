/**
 * Created by Antonio on 8/21/2016.
 */
'use strict';
// var confusionApp = angular.module("confusionApp",[]);
// confusionApp.controller("menuController", function(){
angular.module('confusionApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            //route for contactus page
            .when('/contactus',{
                templateUrl:'contactus.html',
                controller:'ContactController'
            })

            //route for the menu page

            .when('/menu', {
                templateUrl:'menu.html',
                controller:'MenuController'
            })

            //route for the dish details page
            .when('/menu/:id', {
                templateUrl:'dishdetail.html',
                controller: 'DishDetailController'
            })

            .otherwise('/contactus');
        
    })

;