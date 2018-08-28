angular.module('app').component('appNavbar',{
    templateUrl: 'app/components/navbar/navbar.html',
    controller:'navbarCtrl',
    bindings:{
        links: '<',
        activeTab: '<',
        changetab: '&'
    }
});