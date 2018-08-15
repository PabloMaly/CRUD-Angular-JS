angular.module('myApp', ['ui.bootstrap', 'dataGrid', 'pagination'])
.controller('myAppController', ['$scope', 'myAppFactory', '$filter', function ($scope, myAppFactory, $filter) {
        $scope.itens = [
            {nombre: 'Leite', telefono: 212122, descripcion: "tadsasasdas",especialidades:"tarea",dirreccion:"Siempre Viva 920",horarioDesde:"19:00",horarioHasta:"22:00",nombreCom:"Tssa",telefonoCom:"223123",checkCom:true,emailCom:"tesr@sdasad.com"},
            {nombre: 'Adssad', telefono: 3410220, descripcion: "tadsasasdas",especialidades:"tarea",dirreccion:"Siempre Viva 920",horarioDesde:"19:00",horarioHasta:"22:00",nombreCom:"Tssa",telefonoCom:"223123",checkCom:false,emailCom:"tesr@sdasad.com"},
            {nombre: 'Cdssad', telefono: 3410220, descripcion: "tadsasasdas",especialidades:"tarea",dirreccion:"Siempre Viva 920",horarioDesde:"19:00",horarioHasta:"22:00",nombreCom:"Tssa",telefonoCom:"223123",checkCom:false,emailCom:"tesr@sdasad.com"},
            {nombre: 'Gdssad', telefono: 3410220, descripcion: "tadsasasdas",especialidades:"tarea",dirreccion:"Siempre Viva 920",horarioDesde:"19:00",horarioHasta:"22:00",nombreCom:"Tssa",telefonoCom:"223123",checkCom:false,emailCom:"tesr@sdasad.com"},
            {nombre: 'Tdssad', telefono: 3410220, descripcion: "tadsasasdas",especialidades:"tarea",dirreccion:"Siempre Viva 920",horarioDesde:"19:00",horarioHasta:"22:00",nombreCom:"Tssa",telefonoCom:"223123",checkCom:false,emailCom:"tesr@sdasad.com"},
            {nombre: 'Leite', telefono: 212122, descripcion: "tadsasasdas",especialidades:"tarea",dirreccion:"Siempre Viva 920",horarioDesde:"19:00",horarioHasta:"22:00",nombreCom:"Tssa",telefonoCom:"223123",checkCom:true,emailCom:"tesr@sdasad.com"}
        ];
			$scope.gridOptions = {
				data: $scope.itens, //required parameter - array with data
				//optional parameter - start sort options
				/*sort: {
				    predicate: 'nombre',
				    direction: 'asc'
				}*/
                urlSync: true
			};
   /* $scope.gridOptions = {
        data: [],
        urlSync: true
    };
*/
    //myAppFactory.getData().then(function (responseData) {
        $scope.gridOptions.data = $scope.itens;
    //});


}])
.factory('myAppFactory', function ($http) {
    return {
        getData: function () {
            return $http({
                method: 'GET',
                url: 'https://angular-data-grid.github.io/demo/data.json'
            });
        }
    }
});

