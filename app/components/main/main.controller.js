angular.module('app').controller('mainCtrl',['$rootScope','$timeout',function mainCtrl($rootScope,$timeout){
    var ctrl = this;
    this.activeTab = 'info';
    this.modelLoaded = false;
    this.dictionaryLoaded = false;
    this.modelFilename = '';
    this.dictFilename = '';
    this.getJson = function(event){
        const files = event.target.files;
        const reader = new FileReader();
        reader.onload = (readerEvent) =>  {
            const obj = JSON.parse(reader.result);
            ctrl.fullModel = obj;
            ctrl.model = obj.model;
            ctrl.modelLoaded = true;
            ctrl.dictionary = obj.dictionary;
            ctrl.dictionaryLoaded = true;
            $timeout();
        };
        reader.readAsText(event.target.files[0]);
    };
    $rootScope.modalMessages = [];
    
    $rootScope.modalMessage = {
        show: function(modal){
            modal.okClick = function(){
                if(modal.buttons.ok.f) modal.buttons.ok.f(modal.model);
                $rootScope.modalMessages.shift();
            }
            modal.cancelClick = function(){
                $rootScope.modalMessages.shift();
            }
            $rootScope.modalMessages.push(modal);
            //$timeout();
        },
        hide: function(){
            $rootScope.modalMessages.shift();
        }
    }
    
    this.downloadModel = function downloadModel() {
        const dModel = 'data:text/json;charset=utf-8,' + encodeURIComponent(angular.toJson(this.fullModel, 4));
        const a = document.createElement('a');
        a.setAttribute('href', dModel);
        a.setAttribute('download', 'model.json');
        a.click();
    }
    this.getDictionary = function(){
        const files = event.target.files;
        const reader = new FileReader();
        reader.onload = (readerEvent) =>  {
            const obj = JSON.parse(reader.result);
            ctrl.dictionary = obj;
            ctrl.dictionaryLoaded = true;
            ctrl.dictionaryLoaded = true;
            $timeout();
        };
        reader.readAsText(event.target.files[0]);
    };
    this.changeTab = function(tabId){
        ctrl.activeTab = tabId;
    };
    this.updateInfo = function(params){
        var dict = params.dict;
        var info = params.info;
        ctrl.dictionary = dict;
        ctrl.model.info = info;
    };
    this.links = [
        {
          id: 'info',
          href: 'info'
        },
        {
          id: 'menu',
          href: 'menu'
        },
        {
          id: 'slider',
          href: 'slider'
        }
      ];
     
}]);