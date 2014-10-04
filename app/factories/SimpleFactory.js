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