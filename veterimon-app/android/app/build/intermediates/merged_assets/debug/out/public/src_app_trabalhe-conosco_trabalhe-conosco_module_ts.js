(self["webpackChunkveterimon_app"] = self["webpackChunkveterimon_app"] || []).push([["src_app_trabalhe-conosco_trabalhe-conosco_module_ts"],{

/***/ 7867:
/*!*********************************************************************!*\
  !*** ./src/app/trabalhe-conosco/trabalhe-conosco-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabalheConoscoPageRoutingModule": () => (/* binding */ TrabalheConoscoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _trabalhe_conosco_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trabalhe-conosco.page */ 8816);




const routes = [
    {
        path: '',
        component: _trabalhe_conosco_page__WEBPACK_IMPORTED_MODULE_0__.TrabalheConoscoPage
    }
];
let TrabalheConoscoPageRoutingModule = class TrabalheConoscoPageRoutingModule {
};
TrabalheConoscoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrabalheConoscoPageRoutingModule);



/***/ }),

/***/ 2468:
/*!*************************************************************!*\
  !*** ./src/app/trabalhe-conosco/trabalhe-conosco.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabalheConoscoPageModule": () => (/* binding */ TrabalheConoscoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _trabalhe_conosco_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trabalhe-conosco-routing.module */ 7867);
/* harmony import */ var _trabalhe_conosco_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabalhe-conosco.page */ 8816);







let TrabalheConoscoPageModule = class TrabalheConoscoPageModule {
};
TrabalheConoscoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _trabalhe_conosco_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrabalheConoscoPageRoutingModule
        ],
        declarations: [_trabalhe_conosco_page__WEBPACK_IMPORTED_MODULE_1__.TrabalheConoscoPage]
    })
], TrabalheConoscoPageModule);



/***/ }),

/***/ 8816:
/*!***********************************************************!*\
  !*** ./src/app/trabalhe-conosco/trabalhe-conosco.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabalheConoscoPage": () => (/* binding */ TrabalheConoscoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_trabalhe_conosco_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./trabalhe-conosco.page.html */ 9633);
/* harmony import */ var _trabalhe_conosco_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabalhe-conosco.page.scss */ 6483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4595);





let TrabalheConoscoPage = class TrabalheConoscoPage {
    constructor(alert) {
        this.alertController = alert;
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alerta = yield this.alertController.create({
                header: 'Curriculo enviado com sucesso!',
                message: 'Aguarde que entraremos em contato.',
                buttons: ['OK']
            });
            alerta.present();
        });
    }
};
TrabalheConoscoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
TrabalheConoscoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-trabalhe-conosco',
        template: _raw_loader_trabalhe_conosco_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_trabalhe_conosco_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrabalheConoscoPage);



/***/ }),

/***/ 6483:
/*!*************************************************************!*\
  !*** ./src/app/trabalhe-conosco/trabalhe-conosco.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-content {\n  font-family: \"Lexend\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWJhbGhlLWNvbm9zY28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0oiLCJmaWxlIjoidHJhYmFsaGUtY29ub3Njby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */");

/***/ }),

/***/ 9633:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trabalhe-conosco/trabalhe-conosco.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Trabalhe Conosco</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <style>\r\n    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap');\r\n  </style>\r\n\r\n  <ion-content>\r\n    <ion-card-content>\r\n      <form #form=\"ngForm\" (ngSubmit)=\"(form)\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nome</ion-label>\r\n          <ion-input type=\"name\" required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">E-mail</ion-label>\r\n          <ion-input type=\"email\" required></ion-input>\r\n        </ion-item>\r\n\r\n\r\n        <ion-item>\r\n          <ion-label>Cargo</ion-label>\r\n          <ion-select value=\"\" okText=\"Ok\" cancelText=\"Cancelar\">\r\n            <ion-select-option value=\"recepcionista\">Recepcionista</ion-select-option>\r\n            <ion-select-option value=\"assistente\">Assistente</ion-select-option>\r\n            <ion-select-option value=\"enfermeiro\">Enfermeiro</ion-select-option>\r\n            <ion-select-option value=\"rh\">RH</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Escreva aqui sua mensagem</ion-label>\r\n          <ion-input type=\"text\" required></ion-input>\r\n          <ion-textarea rows=\"4\" cols=\"20\" placeholder=\"\"></ion-textarea>\r\n        </ion-item>\r\n\r\n        <ion-button type=\"submit\" shape=\"round\" (click)=\"presentAlert()\" color=\"danger\" type=\"submit\"\r\n          [disabled]=\"form.invalid\" expand=\"block\">Enviar</ion-button>\r\n      </form>\r\n      <ion-item-divider></ion-item-divider>\r\n      <ion-text color=\"dark\">\r\n        <h2 style=\"text-align: center\">Redes Sociais</h2>\r\n      </ion-text>\r\n      <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n        <ion-icon name=\"logo-instagram\" class=\"instagram\"> </ion-icon>\r\n        <ion-icon name=\"logo-facebook\" class=\"facebook\"> </ion-icon>\r\n        <ion-icon name=\"logo-twitter\" class=\"twitter\"> </ion-icon>\r\n      </div>\r\n    </ion-card-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_trabalhe-conosco_trabalhe-conosco_module_ts.js.map