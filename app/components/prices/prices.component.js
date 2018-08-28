angular.module('app').component('appPrices',{
    templateUrl: 'app/components/prices/prices.html',
    controller: 'pricesCtrl',
    bindings:{
        prices: '<',
        dict: '<'
    }
});