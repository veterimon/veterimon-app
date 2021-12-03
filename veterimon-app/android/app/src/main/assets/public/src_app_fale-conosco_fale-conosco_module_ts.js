(self["webpackChunkveterimon_app"] = self["webpackChunkveterimon_app"] || []).push([["src_app_fale-conosco_fale-conosco_module_ts"],{

/***/ 2654:
/*!*************************************************************!*\
  !*** ./src/app/fale-conosco/fale-conosco-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaleConoscoPageRoutingModule": () => (/* binding */ FaleConoscoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _fale_conosco_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fale-conosco.page */ 1291);




const routes = [
    {
        path: '',
        component: _fale_conosco_page__WEBPACK_IMPORTED_MODULE_0__.FaleConoscoPage
    }
];
let FaleConoscoPageRoutingModule = class FaleConoscoPageRoutingModule {
};
FaleConoscoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaleConoscoPageRoutingModule);



/***/ }),

/***/ 8570:
/*!*****************************************************!*\
  !*** ./src/app/fale-conosco/fale-conosco.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaleConoscoPageModule": () => (/* binding */ FaleConoscoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _fale_conosco_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fale-conosco-routing.module */ 2654);
/* harmony import */ var _fale_conosco_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fale-conosco.page */ 1291);







let FaleConoscoPageModule = class FaleConoscoPageModule {
};
FaleConoscoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fale_conosco_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaleConoscoPageRoutingModule
        ],
        declarations: [_fale_conosco_page__WEBPACK_IMPORTED_MODULE_1__.FaleConoscoPage]
    })
], FaleConoscoPageModule);



/***/ }),

/***/ 1291:
/*!***************************************************!*\
  !*** ./src/app/fale-conosco/fale-conosco.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaleConoscoPage": () => (/* binding */ FaleConoscoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_fale_conosco_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fale-conosco.page.html */ 7207);
/* harmony import */ var _fale_conosco_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fale-conosco.page.scss */ 2661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4595);





let FaleConoscoPage = class FaleConoscoPage {
    constructor(alert) {
        this.alertController = alert;
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alerta = yield this.alertController.create({
                header: 'Mensagem enviada com sucesso!',
                message: 'Aguarde até 24h que responderemos sua mensagem!',
                buttons: ['OK']
            });
            alerta.present();
        });
    }
};
FaleConoscoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
FaleConoscoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-fale-conosco',
        template: _raw_loader_fale_conosco_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fale_conosco_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FaleConoscoPage);



/***/ }),

/***/ 2661:
/*!*****************************************************!*\
  !*** ./src/app/fale-conosco/fale-conosco.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-content {\n  font-family: \"Lexend\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhbGUtY29ub3Njby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtBQUNKOztBQUVBO0VBQ0ksaUNBQUE7QUFDSiIsImZpbGUiOiJmYWxlLWNvbm9zY28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59Il19 */");

/***/ }),

/***/ 7207:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fale-conosco/fale-conosco.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Fale Conosco</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <style>\r\n    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap');\r\n  </style>\r\n\r\n  <ion-content>\r\n    <ion-card-content>\r\n      <form #form=\"ngForm\" (ngSubmit)=\"(form)\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nome</ion-label>\r\n          <ion-input type=\"name\" required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">E-mail</ion-label>\r\n          <ion-input type=\"email\" required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Escreva aqui sua mensagem</ion-label>\r\n          <ion-input type=\"text\" required></ion-input>\r\n          <ion-textarea rows=\"3\" cols=\"10\" placeholder=\"\"></ion-textarea>\r\n        </ion-item>\r\n\r\n\r\n        <ion-list lines=\"full\">\r\n          <ion-item>\r\n            <ion-label>Dúvida</ion-label>\r\n            <ion-checkbox></ion-checkbox>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Sugestão</ion-label>\r\n            <ion-checkbox></ion-checkbox>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Reclamação</ion-label>\r\n            <ion-checkbox></ion-checkbox>\r\n          </ion-item>\r\n        </ion-list>\r\n        <ion-button type=\"submit\" shape=\"round\" (click)=\"presentAlert()\" color=\"danger\" type=\"submit\" [disabled]=\"form.invalid\"\r\n          expand=\"block\">Enviar</ion-button>\r\n      </form>\r\n    </ion-card-content>\r\n  </ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fale-conosco_fale-conosco_module_ts.js.map