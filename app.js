(function  () {
	'use strict';
	angular.module('Module2App',[])
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.controller('ToBuyController',ToBuyController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService );

	AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	function AlreadyBoughtController ($scope, ShoppingListCheckOffService) {
		var bought = this;
		bought.items= ShoppingListCheckOffService.getItemsBought();

	};
	ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	function ToBuyController ($scope, ShoppingListCheckOffService) {
		var buy = this; 	
		buy.items = ShoppingListCheckOffService.getItemsToBuy();
		buy.buyItem = function (itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		}
	 };
	function ShoppingListCheckOffService () {
		var service = this;
		var itemsToBuy = [
			{
				name: "Cookie",
				quantity: 1
			},
			{
				name: "Soda",
				quantity: 1
			},
			{
				name: "Beers",
				quantity: 10
			},
			{
				name: "Chips",
				quantity: 12
			},
			{
				name: "Car",
				quantity: 1
			}
		];
		var itemsBought =[];
		service.getItemsToBuy = function () {
			return itemsToBuy;
		};
		service.getItemsBought = function () {
			return itemsBought;
		};
		service.buyItem = function (itemIndex) {
			var item = itemsToBuy[itemIndex];
			itemsToBuy.splice(itemIndex,1);
			console.log(item);
			itemsBought.push(item);
		}
	};

})();