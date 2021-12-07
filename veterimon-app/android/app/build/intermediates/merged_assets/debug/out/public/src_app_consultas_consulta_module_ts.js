(self["webpackChunkveterimon_app"] = self["webpackChunkveterimon_app"] || []).push([["src_app_consultas_consulta_module_ts"],{

/***/ 5979:
/*!******************************************************!*\
  !*** ./src/app/consultas/consulta-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPageRoutingModule": () => (/* binding */ ConsultaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _consulta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta.page */ 8391);




const routes = [
    {
        path: '',
        component: _consulta_page__WEBPACK_IMPORTED_MODULE_0__.ConsultaPage,
    },
    {
        path: 'agendar-consulta',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_consultas_agendar-consulta_agendar-consulta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./agendar-consulta/agendar-consulta.module */ 6659)).then(m => m.AgendarConsultaPageModule)
    },
    {
        path: 'historico-consulta',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_consultas_historico-consulta_historico-consulta_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./historico-consulta/historico-consulta.module */ 5062)).then(m => m.HistoricoConsultaPageModule)
    }
];
let ConsultaPageRoutingModule = class ConsultaPageRoutingModule {
};
ConsultaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], ConsultaPageRoutingModule);



/***/ }),

/***/ 8321:
/*!**********************************************!*\
  !*** ./src/app/consultas/consulta.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPageModule": () => (/* binding */ ConsultaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _consulta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta.page */ 8391);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 4081);
/* harmony import */ var _consulta_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consulta-routing.module */ 5979);







let ConsultaPageModule = class ConsultaPageModule {
};
ConsultaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _consulta_routing_module__WEBPACK_IMPORTED_MODULE_2__.ConsultaPageRoutingModule
        ],
        declarations: [_consulta_page__WEBPACK_IMPORTED_MODULE_0__.ConsultaPage]
    })
], ConsultaPageModule);



/***/ }),

/***/ 8391:
/*!********************************************!*\
  !*** ./src/app/consultas/consulta.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPage": () => (/* binding */ ConsultaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./consulta.page.html */ 8896);
/* harmony import */ var _consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consulta.page.scss */ 274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _componentes_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentes/modal/modal.component */ 9815);






let ConsultaPage = class ConsultaPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    chamarModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _componentes_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__.ModalComponent,
                cssClass: 'my-custom-class'
            });
            return yield modal.present();
        });
    }
};
ConsultaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
ConsultaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-consulta',
        template: _raw_loader_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConsultaPage);



/***/ }),

/***/ 274:
/*!**********************************************!*\
  !*** ./src/app/consultas/consulta.page.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-card {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-button {\n  font-family: \"Lexend\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQ0FBQTtBQUNKOztBQUVBO0VBQ0ksaUNBQUE7QUFDSiIsImZpbGUiOiJjb25zdWx0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 8896:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/consultas/consulta.page.html ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Veterimon</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <style>\r\n    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap');\r\n  </style>\r\n  \r\n\r\n  <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n\r\n  </div>\r\n\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <ion-button routerLink=\"/agendar-consulta\" expand=\"block\" fill=\"outline\">Agendar nova consulta</ion-button>\r\n          <br>\r\n          <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n            <ion-text color=\"dark\">\r\n              <h2 style=\"text-align: center\">Consulte profissionais, dias e horários disponíveis.</h2>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <ion-button routerLink=\"/historico-consulta\" expand=\"block\" fill=\"outline\">Histórico de consultas</ion-button>\r\n          <br>\r\n          <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n            <ion-text color=\"dark\">\r\n              <h2 style=\"text-align: center\">Veja as consultas passadas que seu Pokémon já teve.</h2>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_consultas_consulta_module_ts.js.map