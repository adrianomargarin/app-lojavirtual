angular
    .module("lojaApp.produto")
    .controller("ProdutoController", ProdutoController);

ProdutoController.$inject = ["$http", "$routeParams", "ProdutoFactory", "CarrinhoFactory"];

function ProdutoController($http, $routeParams, ProdutoFactory, CarrinhoFactory){
    var vm = this;

    vm.produto = {};
    vm.avaliacoes = [];
    vm.avaliacao = {};
    vm.enviarAvaliacao = enviarAvaliacao;
    vm.adicionarAoCarrinho = adicionarAoCarrinho;

    buscarAvaliacoes();

    //--------------------------------------------------------------------------

    function enviarAvaliacao(){
        // Complementar

        vm.avaliacao.produtoId = $routeParams.id;

        // TODO: Pegar o id do usuário logado
        vm.avaliacao.usuario = {
            id: 1
        };

        ProdutoFactory.enviarAvaliacao(vm.avaliacao)
            .then(function(response){
                notificar("Avaliação enviada com sucesso.", "success");
                vm.avaliacao = {};
                buscarAvaliacoes();
            })
            .catch(function(response){
                notificar(response.data.error, "error");
            });
    }

    function buscarAvaliacoes(){
        ProdutoFactory.buscarAvaliacoesProduto($routeParams.id)
            .then(function(response){
                vm.avaliacoes = response.data;
            })
            .catch(function(response){
                console.log("Erro ao buscar as avaliações.");
                console.log(response);
            })
    }

    function adicionarAoCarrinho(){
        CarrinhoFactory.adicionarAoCarrinho($routeParams.id, 1, 1)
            .then(function(response){
                notificar("Adicionado ao carrinho com sucesso", "success")
            })
            .catch(function(response){
                notificar(response.data.error, "error")
            })
    }

    ProdutoFactory.buscarProdutoId($routeParams.id)
        .then(function(response){
            vm.produto = response.data;
        })
        .catch(function(response){
            console.log("Erro ao buscar o produto.");
            console.log(response);
        })

}

