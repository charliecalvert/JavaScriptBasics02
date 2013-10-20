/**
 * @author Charlie Calvert
 */

var ElfWorld = angular.module('elfworld', ['elfgame']);

/*.controller('starter', function() {
    game.start();
}); */

function ElfPlayer($scope, elfgame) {
    var mapGrid = {
        width:  24,
        height: 16,
        tile: {
            width:  32,
            height: 32
        }
    };
    
    $scope.name = "ElfPlayer";
    $scope.eventNote = "none";    
    
    // $scope.game = Game;
    elfgame.start(mapGrid);
    // Game.start();
} 
