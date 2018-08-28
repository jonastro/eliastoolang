angular.module('app').component('appInfo',{
    templateUrl: 'app/components/info/info.html',
    controller: 'infoCtrl',
    bindings:{
        info: '<',
        dict: '<'
    }
});