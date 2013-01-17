/**
 * @author Charlie
 */

var MyObject = (function () {
	'use strict';
	
	function MyObject() {};
	
	MyObject.prototype.run = function() {
		alert("Running");
	};
	
	return MyObject;
})();

$(document).ready(function(){
	var myObject = new MyObject();
	myObject.run();
});
