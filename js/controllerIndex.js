(function () {
    

    const myApp = angular.module('myApp', [      
    ]);
    myApp.controller('indexCtrl',['$scope',function($scope){
        console.log("dentro del controlador");

        $scope.selected = {};
        $scope.vendidos = [];
        $scope.tarjeta = false;
        $scope.efectivo = false;
        $scope.mensaje = "";
        $scope.clientName = "";
        $scope.medioPago = [
            {
                id: 1,
                name: "Efectivo",
                icon: "fas fa-money-bill-wave"
            },
            {
                id: 2,
                name: "Tarjeta",
                icon: "fas fa-credit-card"

            }
        ];
        $scope.pedidos = [
            {
                id: 1,
                name: "Combo",
                icon: "fas fa-fist-raised",
                medio: {},
                clientName: "",
                valor: 5000,
                descripcion: "Hamburguesa, Bebida, papas fritas"
            },
            {
                id: 2,
                name: "Hamburguesa",
                icon: "fas fa-hamburger",
                medio: {},
                clientName: "",
                valor: 2000,
                descripcion: "Hamburguesa"
            },
            {
                id: 3,
                name: "Vegetariano",
                icon: "fas fa-carrot",
                medio: {},
                clientName: "",
                valor: 3500,
                descripcion: "Ensaladas surtidas"
            }
        ];
        $scope.seleccionado = function (pedidoSeleccionado){
            $scope.selected = $scope.pedidos[pedidoSeleccionado-1];
        };
        $scope.medioSeleccionado = function (medio){
            console.log("medio",$scope.medioSelected);
            $scope.selected.medio = $scope.medioPago[medio-1];
        };
        $scope.agregar = function (){
            $scope.selected.clientName = $scope.clientName;
            $scope.vendidos.push($scope.selected);
            $scope.selected = {};
            $scope.pedidoSeleccionado = null;
            $scope.medioSelected = null;
            $scope.clientName = "";
            $scope.clientName = "";
            console.log("arreglo de vendidos",$scope.vendidos);
        };
        $scope.validaCampos = ()=>{
            console.log("tarjeta",$scope.medioPagoh);
            let agrega = false;
            if($scope.clientName === ""){
                $scope.mensaje = "Debe ingresar nombre de cliente";
                return true;
            }
            if($scope.pedidoSeleccionado == null){
                $scope.mensaje = "Debe ingresar tipo pedido";
                return true;
            }
            if($scope.medioSelected == null){
                $scope.mensaje = "Seleccione medio de pago";
                return true;
            }
            $scope.mensaje = "";
            return agrega;
        };


    }]);

}());