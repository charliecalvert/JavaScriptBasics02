/**
 * @author Charlie Calvert
 * Edit in part on Cloud 9
 */

var MyObject = (function () {
	'use strict';
	
	function MyObject() {}
	
	MyObject.prototype.run = function() {
		alert("Running");
	};
    
    MyObject.prototype.showCode = function() {
        $("#info").html("This data was sent by jQuery");  
        $("body").css( { "backgroundColor": "lightblue" } );
    };
	
	return MyObject;
})();

$(document).ready(function() {
	var myObject = new MyObject();
	myObject.showCode();
});
