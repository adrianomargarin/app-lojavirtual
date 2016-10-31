angular
    .module("lojaApp.produto", []);

angular
    .module("lojaApp.carrinho", ["lojaApp.carrinho"]);

angular
    .module("lojaApp", ["ngRoute", "lojaApp.produto", "lojaApp.carrinho"]);
