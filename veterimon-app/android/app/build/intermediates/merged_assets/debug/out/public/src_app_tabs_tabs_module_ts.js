(self["webpackChunkveterimon_app"] = self["webpackChunkveterimon_app"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 7991:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 3962);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'noticia',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_noticias_noticia_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../noticias/noticia.module */ 6360)).then(m => m.NoticiaPageModule)
            },
            {
                path: 'consulta',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_consultas_consulta_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../consultas/consulta.module */ 8321)).then(m => m.ConsultaPageModule)
            },
            {
                path: 'mapa',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_mapas_mapa_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../mapas/mapa.module */ 7719)).then(m => m.MapaPageModule)
            },
            {
                path: 'perfil',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_perfils_perfil_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../perfils/perfil.module */ 6175)).then(m => m.PerfilPageModule)
            },
            {
                path: 'fale-conosco',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fale-conosco_fale-conosco_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../fale-conosco/fale-conosco.module */ 8570)).then(m => m.FaleConoscoPageModule)
            },
            {
                path: 'trabalhe-conosco',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_trabalhe-conosco_trabalhe-conosco_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../trabalhe-conosco/trabalhe-conosco.module */ 2468)).then(m => m.TrabalheConoscoPageModule)
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 2711)).then(m => m.HomePageModule)
            },
            {
                path: 'login',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_fireservice_service_ts"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../login/login.module */ 7641)).then(m => m.LoginPageModule)
            },
            {
                path: 'pokedex',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pokedex_pokedex_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pokedex/pokedex.module */ 2006)).then(m => m.PokedexPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/noticia',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 6432:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule),
/* harmony export */   "MenuSanduichePageRoutingModule": () => (/* binding */ MenuSanduichePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 7991);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 3962);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);

const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage,
        children: [
            {
                path: 'fale-conosco',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fale-conosco_fale-conosco_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../fale-conosco/fale-conosco.module */ 8570)).then(m => m.FaleConoscoPageModule)
            },
            {
                path: 'trabalhe-conosco',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_trabalhe-conosco_trabalhe-conosco_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../trabalhe-conosco/trabalhe-conosco.module */ 2468)).then(m => m.TrabalheConoscoPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/fale-conosco',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/fale-conosco',
        pathMatch: 'full'
    }
];
let MenuSanduichePageRoutingModule = class MenuSanduichePageRoutingModule {
};
MenuSanduichePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    })
], MenuSanduichePageRoutingModule);



/***/ }),

/***/ 3962:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 7665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 4427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9535);





let TabsPage = class TabsPage {
    constructor(router) {
        this.router = router;
        this.active = '';
        this.NAV = [
            {
                name: 'About',
                link: '/nav/fale-conosco',
                icon: 'person-circle'
            },
            {
                name: 'Blog',
                link: '/nav/trabalhe-conosco',
                icon: 'albums'
            },
        ];
        this.router.events.subscribe((event) => {
            this.active = event.url;
        });
    }
    ngOnInit() {
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 4427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 7665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n\r\n    <ion-tab-button tab=\"noticia\">\r\n      <ion-icon name=\"newspaper-outline\"></ion-icon>\r\n      <ion-label>Forum</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"consulta\">\r\n      <ion-icon name=\"medical-outline\"></ion-icon>\r\n      <ion-label>Consultas</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"pokedex\">\r\n      <ion-icon name=\"happy-outline\"></ion-icon>\r\n      <ion-label>Pokedex</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"mapa\">\r\n      <ion-icon name=\"map-outline\"></ion-icon>\r\n      <ion-label>Mapa</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"perfil\">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label>Sobre</ion-label>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map