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
  "GoalFactory",
  goalsIndexController
])

.controller("goalsShowController", [
  "$state",
  "$stateParams",
  goalsShowController
])

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
    url: "goals/:id",
    templateUrl: "/js/ng-views/show/html",
    controller: "goalsShowController",
    controllerAs: "vm"
  });
}

function goalsIndexController($state, GoalFactory){
  console.log("Enter Index Controller");
  this.goals = GoalFactory.query()
}

function goalsShowController($state, $stateParams){
  console.log("Enter Show Controller");
}

function GoalFactoryFunction($resource){
    console.log($resource);
    return $resource("http://localhost:3000/goals/:id", {}, {
      update:{method:"PUT"}
    });
}
