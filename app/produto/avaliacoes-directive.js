angular
    .module("lojaApp.produto")
    .directive("avaliacoesProduto", AvaliacoesProdutosDirective);

// avaliacoesProduto - no html <avaliacoes-produto>

AvaliacoesProdutosDirective.$inject = []; //Dependências

function AvaliacoesProdutosDirective(){

    var directive = {
        restrict: "E", // E - Elemento do html, A - Atributo do html
        templateUrl: "app/produto/avaliacoes.html",
        scope: {
            avaliacoes: "@avaliacoes",
            nota: "@nota"
        }
    }

    return directive;
}