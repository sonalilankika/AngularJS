define(['app', 'route-resolver'], function(demoApp){
	demoApp.config(function($routeProvider, routeResolverProvider){
		
		var route = routeResolverProvider.route;
		
		$routeProvider
		.when('/',route.resolve('View1'))
		.when('/view2', route.resolve('View2'))
		.otherwise({
			redirectTo:'/'
		});
	});
});