// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


var acceleratejs = angular.module('acceleratejs', [])

.controller('accelCtrlr', function($scope) {

	window.onscroll = function () {
		$scope.$digest();
		$scope.scroll = window.pageYOffset;
	}
})

// Accelerate attribute
.directive('accelerate', function() {
	return {
		restrict: 'A',
		controller: "accelCtrlr",
		link: function (scope, element, attr) {
			var topmargin = element[0].offsetTop;

			element.css({
				position: "absolute"
			});
			if (scope.$eval(attr.accelerate) != null) {
				scope.$watch("scroll", function () {
					element[0].style.marginTop = (topmargin - window.pageYOffset * scope.$eval(attr.accelerate)) + "px";
				})
			}
			else {
				scope.$watch("scroll", function () {
					element[0].style.marginTop = (topmargin - window.pageYOffset) + "px";
				})
			}
		}
	}
})


// Content area for acceleratable divs
.directive('parallax', function () {
	return {
		restrict: 'E',
		link: function (scope, element) {
			element.css({
				width: 0,
				height: 0,
				position: "absolute",
				marginLeft: "auto",
				marginRight: "auto",
				right: 0,
				left: 0,
				overflow: "visible"
			})
		}
	}
})

// Z-indexes
.directive('z', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			if (scope.$eval(attr.z) != null) {
				element.css({
					zIndex: scope.$eval(attr.z)
				})
			}
		}
	}
});








// function parallax() {
// 	var prlx_first = document.getElementById('one');
// 	prlx_first.style.marginTop = -(window.pageYOffset / 6) +'px';
// };

// window.addEventListener('scroll', parallax, false);

