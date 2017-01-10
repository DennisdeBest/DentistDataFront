(function () {

    function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
        $urlRouterProvider.otherwise("/");
        $logProvider.debugEnabled(true);
        $httpProvider.interceptors.push("httpInterceptor");
        $stateProvider
            .state("root", {
                views: {
                    "header": {
                        templateUrl: "src/common/header.tpl.html",
                        controller: "HeaderCtrl"
                    },
                    "footer": {
                        templateUrl: "src/common/footer.tpl.html",
                        controller: "FooterCtrl"
                    }
                }
            })
            .state("root.home", {
                url: "/",
                views: {
                    "@": {
                        templateUrl: "src/app/home/home.tpl.html",
                        controller: "HomeCtrl as home",
                        resolve: {
                            data: function (DataService) {
                                return DataService.get();
                            }
                        }
                    }
                }
            })
            .state("root.propos", {
                url: "/propos",
                views: {
                    "@": {
                        templateUrl: "src/app/propos/propos.tpl.html",
                        controller: "ProposCtrl as docs"
                    }
                }
            })
            .state("root.nous", {
                url: "/nous",
                views: {
                    "@": {
                        templateUrl: "src/app/nous/nous.tpl.html",
                        controller: "NousCtrl as nous"
                    }
                }
            })
            .state("root.pourquoi", {
                url: "/pourquoi",
                views: {
                    "@": {
                        templateUrl: "src/app/pourquoi/pourquoi.tpl.html",
                        controller: "PourquoiCtrl as pourquoi"
                    }
                }
            });
    }

// main-routes.js
    angular.module("app.routes", ["ui.router", "templates", "common.interceptors.http"])
        .config(config);
})();
