define(function(){
	
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

		demoApp.factory('SimpleFactory', function(){
			var customers = [
			{name:'John Smith', city:'Phoenix'},
			{name:'John Doe', city:'New York'},
			{name:'Jane Doe', city:'San Francisco'}
			];

			var factory = {};

			factory.getCustomers = function (){
				return customers;
			}

			return factory;
		});

		demoApp.controller('SimpleController', function($scope, SimpleFactory){
			$scope.customers = [];

			init();
			function init(){
				$scope.customers = SimpleFactory.getCustomers();
			}

			$scope.addCustomer = function(){
				$scope.customers.push(
					{name:$scope.newCustomer.name, city:$scope.newCustomer.city}
					);

				$scope.newCustomer = null;
			};
		});
	});

return demoApp;
});