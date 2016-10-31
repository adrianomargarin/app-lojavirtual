angular
    .module("lojaApp.carrinho")
    .controller("CarrinhoController", CarrinhoController);

CarrinhoController.$inject = ["$http", "$scope", "$window", "$routeParams", "CarrinhoFactory"];

function CarrinhoController($http, $scope, $window, $routeParams, CarrinhoFactory){
    var vm = this;

    vm.itens = [];
    vm.removerItem = removerItem;
    vm.atualizarQuantidade = atualizarQuantidade;
    vm.total = 0;

    buscarItens();

    $scope.$watch(function(){
        return vm.items;
    }, atualizarTotal, true)


    //--------------------------------------------------------------------------

    function buscarItens(){
        CarrinhoFactory.buscarItensCarrinhoPorUsuario(1)
            .then(function(response){
                vm.itens = response.data;
                atualizarTotal()
            })
            .catch(function(response){
                notificar("Erro ao buscar os itens do carrinho", "error");
            });
    }

    function removerItem(itemId){
        if(!window.confirm("Tem certeza que deseja remover?")){
            return
        }

        CarrinhoFactory.removerItemDoCarrinho(itemId)
            .then(function(response){
                notificar("Removido com sucesso", "success");
                buscarItens();
            })
            .catch(function(response){
                notificar("Erro ao remover", "error");
            });
    }

    function atualizarTotal(){
        var total = 0;

        for(var item of vm.itens){
            total += (item.produto.preco * item.quantidade);
        }

        vm.total = total;
    }

    function atualizarQuantidade(item, quantidade){
        var novaQuantidade = item.quantidade + quantidade;

        if(novaQuantidade == 0){
            return;
        }

        item.quantidade = novaQuantidade;
    }

}

