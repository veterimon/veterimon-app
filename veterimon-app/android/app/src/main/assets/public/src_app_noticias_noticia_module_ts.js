(self["webpackChunkveterimon_app"] = self["webpackChunkveterimon_app"] || []).push([["src_app_noticias_noticia_module_ts"],{

/***/ 2578:
/*!****************************************************!*\
  !*** ./src/app/noticias/noticia-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiaPageRoutingModule": () => (/* binding */ NoticiaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _noticia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticia.page */ 889);




const routes = [
    {
        path: '',
        component: _noticia_page__WEBPACK_IMPORTED_MODULE_0__.NoticiaPage,
    }
];
let NoticiaPageRoutingModule = class NoticiaPageRoutingModule {
};
NoticiaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], NoticiaPageRoutingModule);



/***/ }),

/***/ 6360:
/*!********************************************!*\
  !*** ./src/app/noticias/noticia.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiaPageModule": () => (/* binding */ NoticiaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _noticia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticia.page */ 889);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 4081);
/* harmony import */ var _noticia_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticia-routing.module */ 2578);








let NoticiaPageModule = class NoticiaPageModule {
};
NoticiaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _noticia_routing_module__WEBPACK_IMPORTED_MODULE_2__.NoticiaPageRoutingModule
        ],
        declarations: [_noticia_page__WEBPACK_IMPORTED_MODULE_0__.NoticiaPage]
    })
], NoticiaPageModule);



/***/ }),

/***/ 889:
/*!******************************************!*\
  !*** ./src/app/noticias/noticia.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiaPage": () => (/* binding */ NoticiaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_noticia_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./noticia.page.html */ 6706);
/* harmony import */ var _noticia_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticia.page.scss */ 6473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 4595);





let NoticiaPage = class NoticiaPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
};
NoticiaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
NoticiaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-noticia',
        template: _raw_loader_noticia_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_noticia_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NoticiaPage);



/***/ }),

/***/ 6473:
/*!********************************************!*\
  !*** ./src/app/noticias/noticia.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\nion-label {\n  margin: 0;\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-title {\n  font-family: \"Lexend\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFHRTtFQUNFLGlDQUFBO0FBQUoiLCJmaWxlIjoibm90aWNpYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcblxyXG4gIH1cclxuXHJcbiAgaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 6706:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/noticias/noticia.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Notícias</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<style>\r\n  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap');\r\n</style>\r\n\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-menu contentId=\"menu\" menuId=\"menu\" side=\"start\" type=\"overlay\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>MENU</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-item button routerLink=\"/tabs/fale-conosco\">\r\n      \r\n        <br>\r\n        <ion-label> CONTATO</ion-label>\r\n      </ion-item>\r\n      <ion-item button routerLink=\"/tabs/trabalhe-conosco\">\r\n        <br>\r\n        <ion-label> TRABALHE CONOSCO</ion-label>\r\n      </ion-item>\r\n     \r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"menu\"></ion-router-outlet>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-button menu=\"menu\"></ion-menu-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n \r\n\r\n  \r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n            <h2 style>Adotei um Pokémon, e agora?</h2>\r\n            <ion-text color=\"dark\">\r\n              <h3 style=\"text-align: center\">\r\n                Entenda as necessidades do pet nessa fase e saiba como manter os cuidados com gato filhote assim como\r\n                muitos\r\n                outros novos pets, os cuidados com Pokémon filhote são importantes. Principalmente na fase das primeiras\r\n                semanas de vida do [...]\r\n              </h3>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n            <h2 style>Jornal para Pokémon fazer xixi faz mal?</h2>\r\n            <ion-text color=\"dark\">\r\n              <h3 style=\"text-align: center\">\r\n                No passado, o jornal para Pokémon era extremamente popular e utilizado para demarcar o local em que o\r\n                pet deveria fazer xixi. Inclusive, nessa época, os tutores não se questionavam se essa prática fazia bem\r\n                ou mal para o [...]\r\n              </h3>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n            <h2 style>Quais os tipos de radiografia e quando são indicadas?</h2>\r\n            <ion-text color=\"dark\">\r\n              <h3 style=\"text-align: center\">\r\n                Saiba qual é a importância da radiografia em Pokémon e por que elas devem ser feitas quando solicitado\r\n                Sem dúvidas, uma das técnicas mais importantes para a medicina veterinária é a radiografia em [...]\r\n              </h3>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-card>\r\n        <ion-card-content>\r\n          <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n            <h2 style>Remédios de humano podem ser dados aos Pokémon?</h2>\r\n            <ion-text color=\"dark\">\r\n              <h3 style=\"text-align: center\">\r\n                Normalmente, quando estamos com muita dor a tendência é recorrermos a qualquer remédio de efeito rápido.\r\n                Mas você tomaria comprimidos próprios para Pokémon? Provavelmente não. O contrário também não é\r\n                recomendado\r\n              </h3>\r\n            </ion-text>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_noticias_noticia_module_ts.js.map