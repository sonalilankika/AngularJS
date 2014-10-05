define(['app', 'factories/SimpleFactory'], function(demoApp){
	demoApp.controller('View1Controller', function($scope, SimpleFactory){
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