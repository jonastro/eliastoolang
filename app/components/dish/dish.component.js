angular.module('app').component('appDish',{
    templateUrl: 'app/components/dish/dish.html',
    controller: 'dishCtrl',
    bindings:{
        dish: '<',
        texts: '<',
        index: '<',
        remove: '&'
    }
});