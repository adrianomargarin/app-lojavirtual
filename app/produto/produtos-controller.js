angular
    .module("lojaApp.produto")
    .controller("ProdutosController", ProdutosController);

ProdutosController.$inject = ["$http"];

function ProdutosController($http){
    var vm = this;
    vm.produtos = [];
    vm.ordem = "preco";

    $http.get(URL_REST + "/produtos")
        .then(function(response){
            vm.produtos = response.data;
        })
        .catch(function(response){
            console.log("Erro ao buscar os produtos");
            console.log(response);
        })
}

