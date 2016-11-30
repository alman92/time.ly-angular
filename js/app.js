angular
.module("time.ly",[
  "ui.router"
])

.config([
  "$stateProvider",
  Router
])

function Router($stateProvider){
  $stateProvider
  .state("goalIndex",{
    url: "/goals",
    templateUrl: "/js/ng-views/index.html",
    controller: "goalsIndexController",
    controllerAs: "vm"
  })
}
