angular
    .module("lojaApp.produto")
    .controller("ProdutosController", ProdutosController);

ProdutosController.$inject = ["$http", "ProdutoFactory"];

function ProdutosController($http, ProdutoFactory){
    var vm = this;
    vm.produtos = [];
    vm.ordem = "preco";

    ProdutoFactory.buscarTodosProdutos()
        .then(function(response){
            vm.produtos = response.data;
        })
        .catch(function(response){
            console.log("Erro ao buscar os produtos");
            console.log(response);
        })
}

