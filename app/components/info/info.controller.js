angular.module('app').controller('infoCtrl',['$window','$timeout',function infoCtrl($window, $timeout){
    var ctrl = this;
    this.addField = function(){
        var newName = $window.prompt("Introduce nombre para sección");
        if(!newName) return;
        var newId = 'txInfo' + newName.charAt(0).toUpperCase() + newName.slice(1);
        ctrl.info[newName] = newId;
        ctrl.dict[newId] = {};
    };
    this.addLang = function(dictId){
        var newLang = $window.prompt("Introduce codigo de lenguaje");
        if(!newLang) return;
        var newContent = $window.prompt("Introduce el texto traducido");
        if(!newContent) return;
        ctrl.dict[dictId][newLang] = newContent;
    }
}]);