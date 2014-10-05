define(['app'], function(demoApp){
	demoApp.config(function($routeProvider){
		$routeProvider
		.when('/',{
			controller: 'SimpleController',
			templateUrl: 'app/views/view1.html'
		})
		.when('/view2', {
			controller: 'SimpleController',
			templateUrl: 'app/views/view2.html'
		})
		.otherwise({
			redirectTo:'/'
		});
	});
});