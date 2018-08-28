angular.module('app').controller('pricesCtrl',['$window','$rootScope',function($window, $rootScope){
    var ctrl = this;
    this.loaded = false;
    var modalMessage = $rootScope.modalMessage;
    this.$onInit = function(){
        ctrl.selectedType = this.prices.types[0].id;
        ctrl.loaded = true;
        ctrl.deleteDish = function(index){
            ctrl.prices.menus.forEach(function(menu){
                if(menu.id === ctrl.selectedType){
                    menu.dishes.splice(index,1);
                }
            });
        };
        ctrl.addDish = function(){
            modalMessage.show({
                model:{
                    fields:[
                        {
                            id: 'dishId',
                            name: 'Identificador',
                            value: ''
                        },
                        {
                            id: 'dishPrice',
                            name: 'Precio',
                            value: ''
                        },
                        {
                            id: 'dishDictId',
                            name: 'Id Diccionario',
                            value: ''
                        },
                        {
                            id: 'dishTxtEs',
                            name: 'ES',
                            value: ''
                        },
                        {
                            id: 'dishTxtEn',
                            name: 'EN',
                            value: ''
                        }
                    ]
                },
                buttons:{
                    ok: {
                        f: function(model){
                            var newDish = {};
                            model.fields.forEach(function(field){
                                newDish[field.id] = field.value;
                            });
                            var newDictEntry = {};
                            if(newDish.dishTxtEs) newDictEntry.es = newDish.dishTxtEs;
                            if(newDish.dishTxtEn) newDictEntry.en = newDish.dishTxtEn;
                            ctrl.dict[newDish.dishDictId] = newDictEntry;
                            ctrl.prices.menus.forEach(function(menu){
                                if(menu.id === ctrl.selectedType){
                                    menu.dishes.push({
                                        id: newDish.dishId,
                                        text: newDish.dishDictId,
                                        price: newDish.dishPrice
                                    });
                                }
                            });
                        }
                    },
                    cancel: {
                        f: function(model){
                            console.log(model);
                        }
                    }
                }
            });
        }
    }
}]);