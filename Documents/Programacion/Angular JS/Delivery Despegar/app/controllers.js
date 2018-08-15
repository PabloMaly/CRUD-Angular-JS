var app = angular.module('myModule', ['ui.bootstrap', 'dataGrid', 'pagination']);
app.controller('ListaComprasController',['$scope','$anchorScroll',function($scope,$anchorScroll) {
			$scope.form = true;
			$scope.item = {};
			
        $scope.itens = [
            {nombre: 'Juan', telefono: 212122, descripcion: "Preuba 1",especialidades:"tarea",dirreccion:"Siempre Viva 920",horarioDesde:"19:00",horarioHasta:"22:00",telefonoCOM:"223123",emailCOM:"tesr@sdasad.com",namelastADM:"Asesores SA",mySerNameADM:"Laz",myphoneADM:22132133,namelast:"Sergio",myphoneCOM:656565,mySerNameCOM:"Rodriguez",emailADM:"tesr@sdasad.com",checkidem:true},
            {nombre: 'Juan Jose', telefono: 3410220, descripcion: "tadsasasdas",especialidades:"tarea",dirreccion:"San Martin 555",horarioDesde:"19:00",horarioHasta:"22:00",telefonoCOM:"223123",emailCOM:"tesr@sdasad.com",namelastADM:"Asesores SA",mySerNameADM:"Russef",myphoneADM:665+665656,namelast:"Lort",myphoneCOM:656565,mySerNameCOM:"Arenales",emailADM:"tesr@gmail.com",checkidem:true},
            {nombre: 'Pablo', telefono: 3410220, descripcion: "tadsasasdas",especialidades:"tarea",dirreccion:"Siis 64",horarioDesde:"19:00",horarioHasta:"22:00",telefonoCOM:"223123",emailCOM:"tesr@sdasad.com",namelastADM:"Paz SA",mySerNameADM:"Perez",myphoneADM:9899878745,namelast:"Matias",myphoneCOM:656565,mySerNameCOM:"Chico",emailADM:"delivery12@gmail.com",checkidem:true},
            {nombre: 'Paulo', telefono: 3410220, descripcion: "tadsasasdas",especialidades:"Horario",dirreccion:"Viaje 4",horarioDesde:"19:00",horarioHasta:"22:00",telefonoCOM:"223123",emailCOM:"tesr@sdasad.com",namelastADM:"Loren SA",mySerNameADM:"Matia",myphoneADM:9899878745,namelast:"Pablo",myphoneCOM:45654,mySerNameCOM:"Vaez",emailADM:"deliver231y@gmail.com",checkidem:true},
            {nombre: 'Jorge', telefono: 3410220, descripcion: "tadsasasdas",especialidades:"Venta",dirreccion:"Promo Viva 313",horarioDesde:"19:00",horarioHasta:"22:00",telefonoCOM:"223123",emailCOM:"tesr@sdasad.com",namelastADM:"Asesores SRL",mySerNameADM:"Sam",myphoneADM:689898,namelast:"Rodrigo",myphoneCOM:545646,mySerNameCOM:"Tare",emailADM:"delivery12@gmail.com",checkidem:true},
            {nombre: 'Juan Carlos', telefono: 212122, descripcion: "tadsasasdas",especialidades:"tarea",dirreccion:"Siempre Viva 131",horarioDesde:"19:00",horarioHasta:"22:00",telefonoCOM:"223123",emailCOM:"tesr@sdasad.com",namelastADM:"TIKI SA",mySerNameADM:"Per",myphoneADM:764876578,namelast:"Sergio",myphoneCOM:4515656,mySerNameCOM:"Stark",emailADM:"delivery23@gmail.com",checkidem:true}
        ];
			$scope.gridOptions = {
				data: $scope.itens, 
			};
        $scope.adicionaItem = function () {
            $scope.itens.push(
                {
                    nombre: $scope.item.nombre, 
                    telefono: $scope.item.telefono, 
                    descripcion: $scope.item.descripcion,
                    especialidades: $scope.item.especialidades,
                    dirreccion: $scope.item.dirreccion,
                    horarioDesde: $scope.item.horarioDesde,
                    horarioHasta: $scope.item.horarioHasta,
                    checkCom: $scope.item.checkCom,
                    nombreCom: $scope.item.nombreCom,
                    apellidoCom: $scope.item.apellidoCom,
                    telefonoCom: $scope.item.telefonoCom,
                    emailCom: $scope.item.emailCom
                }
            );
            $scope.form = true;
            toastr.success("El Item fue agregado.");
        };
        $scope.addItem = function () {
            $scope.form = false;
        };
        $scope.editarItem = function(index){
            $scope.form = false;
            $scope.item = $scope.itens[index];
            $scope.edit = true;
            $scope.scroll = function () {
                        $anchorScroll();
            };
        };

        $scope.applyChanges = function(index){
            $scope.item = {};
            $scope.edit = false;
            $scope.form = true;
            toastr.success("El Item fue modficado.");
        };
        $scope.CancelarItem = function(index){
            $scope.edit = false;
            $scope.form = true;
            $scope.item = {};
        };
        $scope.deleteItem = function(index){
            $scope.itens.splice(index, 1);
            toastr.success("El Item fue eliminado.");
            $scope.edit = false;
            $scope.form = true;
            $scope.item = {};
        };
}]);
app.directive('ngConfirmClick', [
    function(){
        return {
            link: function (scope, element, attr) {
                var msg = attr.ngConfirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind('click',function (event) {
                    if ( window.confirm(msg) ) {
                        scope.$apply(clickAction)
                    }
                });
            }
        };
}])
