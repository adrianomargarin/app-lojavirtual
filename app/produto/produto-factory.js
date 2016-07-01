angular
    .module("lojaApp.produto")
    .factory("ProdutoFactory", ProdutoFactory);

ProdutoFactory.$inject = ["$http"];

function ProdutoFactory($http){
    var factory = {
        buscarTodosProdutos: buscarTodosProdutos,
        buscarProdutoId: buscarProdutoId
    };

    return factory;

    function buscarTodosProdutos(){
        return $http.get(URL_REST + "/produtos");
    }

    function buscarProdutoId(id){
        return $http.get(URL_REST + "/produto/" + id);
    }
}