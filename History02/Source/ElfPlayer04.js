/**
 * @author Charlie Calvert
 */

var ElfWorld = angular.module('elfworld', ['elfgame'])
.factory('gameEventService', function($rootScope) {
    return {
        message: "",
        
        towerBroadcast: function(message) {
            this.message = message;
            this.broadcastMessage('towerBroadcast');
        },
        
        broadcastMessage: function(broadcastType) {
            $rootScope.$broadcast(broadcastType);            
        }
    };    
});

/*.controller('starter', function() {
    game.start();
}); */

function ElfPlayer($scope, gameEventService) {    
    
    $scope.name = "ElfPlayer";
    $scope.eventNote = "no messages";    
  
    // This event is fired from inside crafty when a tower is found.  
    // We need to call $apply because we are calling from Crafty, not from Angular.
    $scope.$on('towerBroadcast', function() {        
        $scope.$apply(function() { $scope.eventNote = gameEventService.message; });
        console.log(gameEventService.message);
    });    
} 

// ElfPlayer.$inject = ['$scope', 'gameEventService'];        
        
