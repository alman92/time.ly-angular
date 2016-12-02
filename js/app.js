angular
.module("time.ly",[
  "ui.router",
  "ngResource"
])

.config([
  "$stateProvider",
  Router
])

.controller("goalsIndexController", [
  "$state",
  "$stateParams",
  "GoalFactory",
  goalsIndexController
])

// .controller("goalsShowController", [
//   "$state",
//   "$stateParams",
//   goalsShowController
// ])

.factory("GoalFactory", [
  "$resource",
  GoalFactoryFunction
]);

function Router($stateProvider){
  console.log("Hitting Router");
  $stateProvider
  .state("goalIndex",{
    url: "/goals",
    templateUrl: "/js/ng-views/index.html",
    controller: "goalsIndexController",
    controllerAs: "vm"
  })
  .state("goalShow", {
    url: "/goals/:id",
    templateUrl: "/js/ng-views/show.html",
    controller: "goalsShowController",
    controllerAs: "vm"
  });
}

function goalsIndexController($state, $stateParams, GoalFactory){
  console.log("Enter Index Controller");
  this.greeting = "Harambe!"
  this.showHours = false
  this.showDays = false
  this.showWeeks = false
  this.showMonths = false
  this.showYears = false
  this.create = function () {
    console.log("submitted");
  }
  this.clickShow = function(timeLength){
    console.log(timeLength);
    if (timeLength == 'hours'){
        this.showHours = !this.showHours
      }
    else if (timeLength == 'days'){
      this.showDays = !this.showDays
    }
    else if (timeLength == 'weeks'){
      this.showWeeks = !this.showWeeks
    }
    else if (timeLength == 'months'){
      this.showMonths = !this.showMonths
    }
    else if (timeLength == 'years'){
      this.showYears = !this.showYears
    }
  }
}

// function goalsShowController($state, $stateParams){
//   console.log("Enter Show Controller");
//   // this.greeting = "Harambe!"
//   // this.create = function () {
//   //   console.log("submitted");
//   }
// }

function GoalFactoryFunction($resource){
    console.log($resource);
    return $resource("http://localhost:3000/goals/:id", {}, {
      update:{method:"PUT"}
    });
}
