define(['angular'],function(angular){
	
	var demoApp = angular.module('demoApp', ['ngRoute', 'routeResolver', 'oc.lazyLoad'])
	
	.config(function($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider){

		$ocLazyLoadProvider.config({
			asyncLoader: require
		});

		demoApp.controller = $controllerProvider.register;
		demoApp.service = $provide.service;
		demoApp.factory = $provide.factory;
		demoApp.filter = $filterProvider.register;
		demoApp.directive = $compileProvider.directive;
	});

	return demoApp;
});