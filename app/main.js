require.config({
	paths:{
		'angular':'../lib/AngularJS/angular',
		'angular-route':'../lib/AngularJS/angular-route.min',
		'route-resolver':'../lib/AngularJS/routeResolver',
		'oc-lazy-load':'../lib/AngularJS/ocLazyLoad',
		'app':'app'
	}
});

require(['angular', 'angular-route', 'route-resolver', 'oc-lazy-load', 'routes'], function(){
	angular.bootstrap(document, ['demoApp']);
});