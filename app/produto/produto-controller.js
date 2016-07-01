angular
    .module("lojaApp.produto")
    .controller("ProdutoController", ProdutoController);

ProdutoController.$inject = ["$http", "$routeParams", "ProdutoFactory"];

function ProdutoController($http, $routeParams, ProdutoFactory){
    var vm = this;
    vm.produto = {};
    vm.avaliacoes = [];

    ProdutoFactory.buscarProdutoId($routeParams.id)
        .then(function(response){
            vm.produto = response.data;
        })
        .catch(function(response){
            console.log("Erro ao buscar o produto.");
            console.log(response);
        })

    ProdutoFactory.buscarAvaliacoesProduto($routeParams.id)
        .then(function(response){
            vm.avaliacoes = response.data;
        })
        .catch(function(response){
            console.log("Erro ao buscar as avaliações.");
            console.log(response);
        })

}

