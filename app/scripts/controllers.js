/**
 * Created by Antonio on 9/3/2016.
 */
'use strict';
// var confusionApp = angular.module("confusionApp",[]);
// confusionApp.controller("menuController", function(){
angular.module('confusionApp')
    .controller('MenuController', ['$scope','menuFactory',function($scope,menuFactory)
    {

        $scope.tab=1;
        $scope.filtText='';
        $scope.showDetails = false;
        var dishes = menuFactory.getDishes();

        $scope.dishes=dishes;

        $scope.select = function(setTab){
            $scope.tab=setTab;
            if(setTab===2){
                $scope.filtText="appetizer";
            }
            else if(setTab===3){
                $scope.filtText="mains";
            }
            else if(setTab===4){
                $scope.filtText="dessert";
            }
            else {
                $scope.filtText="";
            }
        };
        $scope.isSelected = function(checkTab){
            return($scope.tab===checkTab);
        };

        $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        };


    }])

    .controller('ContactController',['$scope', function ($scope) 
    {
        $scope.feedback={
            mychannel:"",
            firstName:"",
            lastName:"",
            agree:false,
            email:""
        };

        var channels = [
            {
                value:"tel",
                label:"tel"
            },
            {
                value:"Email",
                label:"Email"
            }
        ];

        $scope.channels = channels;

        $scope.invalidChannelSelection = false;

    }])
    .controller('FeedbackController',['$scope',function ($scope)
    {

        $scope.sendFeedback = function () {
            console.log($scope.feedback);
            if($scope.feedback.agree
                && ($scope.feedback.mychannel == "")
                && !$scope.feedback.mychannel){

                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {

                $scope.invalidChannelSelection = false;
                $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                    agree:false, email:""
                };
                $scope.feedback.mychannel="";

                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }

        }

    }])

    .controller('DishDetailController',['$scope','menuFactory', function($scope,menuFactory)
    {
        $scope.typeFilter = "";
        var dish= menuFactory.getDish(1);

        $scope.dish = dish;
    }])

    .controller('DishCommentController',['$scope',function($scope)
    {
        
        var ccomment= {
            rating:5,
            comment:"",
            author:"",
            date:Date.now()
        };



        var cccomment= {
            rating:0,
            comment:"push",
            author:"",
            date:Date.now()
        };
        $scope.dish.comments.push(cccomment);
        $scope.ccomment = ccomment;

        $scope.pushComment = function () {

            $scope.dish.comments.push(ccomment);
            console.log('holi');

        };


    }])


;
