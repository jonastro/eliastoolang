angular.module('app').component('appModal',{
    templateUrl: 'app/components/modal/modal.html',
    controller:'modalCtrl',
    bindings:{
        model: '<',
        ok: '&',
        cancel: '&',
    }
});