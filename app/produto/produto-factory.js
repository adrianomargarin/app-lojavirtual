angular
    .module("lojaApp.produto")
    .factory("ProdutoFactory", ProdutoFactory);

ProdutoFactory.$inject = ["$http"];

function ProdutoFactory($http){
    var factory = {
        buscarTodosProdutos: buscarTodosProdutos,
        buscarProdutoId: buscarProdutoId,
        buscarAvaliacoesProduto: buscarAvaliacoesProduto
    };

    return factory;

    function buscarTodosProdutos(){
        return $http.get(URL_REST + "/produtos");
    }

    function buscarProdutoId(id){
        return $http.get(URL_REST + "/produto/" + id);
    }

    function buscarAvaliacoesProduto(id){
        return $http.get(URL_REST + "/avaliacoes/" + id);
    }
}