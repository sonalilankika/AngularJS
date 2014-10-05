require.config({
	paths:{
		'angular':'../lib/AngularJS/angular',
		'angular-route':'../lib/AngularJS/angular-route.min',
		'route-resolver':'../lib/AngularJS/routeResolver',
		'oc-lazy-load':'../lib/AngularJS/ocLazyLoad',
		'app':'app',
		'jquery':'../lib/jQuery/jquery-2.1.1.min'
	},
	shim:{
		'angular':{
			exports:'angular'
		},
		'angular-route':{
			deps:['angular']
		},
		'oc-lazy-load':{
			deps:['angular']
		},
		'route-resolver':{
			deps:[
				'angular-route',
				'oc-lazy-load'
			]
		},
		'app':{
			deps:[
				'route-resolver'
			]
		}
		
	}
});

require(['routes'], function(){
		angular.bootstrap(document, ['demoApp']);
});