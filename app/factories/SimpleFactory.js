define(['app'], function(demoApp){
	demoApp.factory('SimpleFactory', function(){
		var customers = [
		{name:'John Smith A', city:'Phoenix'},
		{name:'John Doe A', city:'New York'},
		{name:'Jane Doe A', city:'San Francisco'}
		];

		var factory = {};

		factory.getCustomers = function (){
			return customers;
		}

		return factory;
	});
});