(self["webpackChunkveterimon_app"] = self["webpackChunkveterimon_app"] || []).push([["src_app_perfils_perfil_module_ts"],{

/***/ 9831:
/*!**************************************************!*\
  !*** ./src/app/perfils/perfil-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageRoutingModule": () => (/* binding */ PerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page */ 1278);




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ 6175:
/*!******************************************!*\
  !*** ./src/app/perfils/perfil.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageModule": () => (/* binding */ PerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 9831);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page */ 1278);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 4081);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9535);









let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_2__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _perfil_page__WEBPACK_IMPORTED_MODULE_1__.PerfilPage }]),
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_1__.PerfilPage]
    })
], PerfilPageModule);



/***/ }),

/***/ 1278:
/*!****************************************!*\
  !*** ./src/app/perfils/perfil.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPage": () => (/* binding */ PerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./perfil.page.html */ 932);
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.scss */ 3207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let PerfilPage = class PerfilPage {
    constructor() { }
    ngOnInit() {
    }
};
PerfilPage.ctorParameters = () => [];
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PerfilPage);



/***/ }),

/***/ 3207:
/*!******************************************!*\
  !*** ./src/app/perfils/perfil.page.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* ion-card {\n    overflow: hidden;\n    position: relative;\n    padding-top: 70px;\n    width: 90%;\n    height: auto;\n    margin: auto;\n\n\n    .img-wrapper {\n        position: absolute;\n        left: 50%;\n        top: -5%;\n        transform: translateX(-50%);\n        img {\n            border-radius: 10px;\n            width: 90px;\n            height: 90px;\n            margin: 1px;\n        }\n\n        ion-icon {\n            width: 100px;\n            height: 100px;\n        }\n    }\n}\n */\nion-title {\n  font-family: \"Lexend\", sans-serif;\n}\nion-card {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-family: \"Lexend\", sans-serif;\n}\nion-label {\n  margin: 0;\n}\n.card {\n  overflow: hidden;\n  position: relative;\n  padding-top: 0px;\n  width: 70%;\n  height: auto;\n  margin: auto;\n  float: none;\n  font-family: \"Lexend\", sans-serif;\n}\n.texto {\n  display: inline-block;\n  text-align: left;\n  margin: auto;\n}\n.ion-justify-content-center {\n  font-family: \"Lexend\", sans-serif;\n}\n.img-wrapper {\n  height: 40%;\n  width: 40%;\n  object-fit: cover;\n  float: left;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 40%;\n  border: transparent thin solid;\n  padding: 5px;\n  margin: 0px 10px 10px 0;\n  max-width: 186px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0FBNkJDO0VBQ0csaUNBQUE7QUFBSjtBQUlDO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFESjtBQUtFO0VBQ0UsU0FBQTtBQUZKO0FBS0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFGSjtBQUlBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFESjtBQUlBO0VBQ0ksaUNBQUE7QUFESjtBQUtDO0VBQ0csV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBRkoiLCJmaWxlIjoicGVyZmlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGlvbi1jYXJkIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICBcclxuICAgIC5pbWctd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IC01JTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuICovXHJcblxyXG4gaW9uLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxuICB9ICBcclxuXHJcblxyXG4gaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4uY2FyZCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmbG9hdDpub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi50ZXh0byB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuICAgIFxyXG5cclxuIC5pbWctd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXI6IHRyYW5zcGFyZW50IHRoaW4gc29saWQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDEwcHggMDtcclxuICAgIG1heC13aWR0aDogMTg2cHg7XHJcblxyXG4gICAgfVxyXG4gXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 932:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/perfils/perfil.page.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>Veterimon</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <style>\r\n    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap');\r\n  </style>\r\n  \r\n  <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n    <ion-text color=\"dark\">\r\n    </ion-text>\r\n  </div>\r\n\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n        <img src=\"./assets/clinica/center.jpg\" />\r\n      </div>\r\n      <ion-item-divider></ion-item-divider>\r\n      <ion-text color=\"dark\">\r\n        <h2 style=\"text-align: center\">Nossos profissionais que atuam nas áreas de clínica veterinária e especialidades\r\n          são formados nas melhores Universidades de Medicina Veterinária, com especialização, mestrado e doutorado em\r\n          diversas áreas.\r\n        </h2>\r\n      </ion-text>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n    <ion-text color=\"dark\">\r\n      <h4>Nossos profissionais</h4>\r\n    </ion-text>\r\n  </div>\r\n\r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  <ion-card class=card>\r\n    <div class=\"img-wrapper\">\r\n      <img src=\"./assets/vets/1.png\" alt=\"Image\">\r\n    </div>\r\n    <ion-card-title>\r\n      <ion-card-content class=\"ion-text-center\">Paloma\r\n        <ion-text color=\"dark\">\r\n          <h5>Clinica Geral\r\n            <br>\r\n            <ion-icon name=\"time-outline\"></ion-icon>10h - 21h\r\n            segunda a sexta\r\n          </h5>\r\n        </ion-text>\r\n        <p></p>\r\n        <h6 class=\"texto\">É um profissional da Medicina com amplo conhecimento sobre o funcionamento do corpo humano em\r\n          seu conjunto.\r\n        </h6>\r\n      </ion-card-content>\r\n    </ion-card-title>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card class=card>\r\n    <div class=\"img-wrapper\">\r\n      <img src=\"./assets/vets/3.png\" alt=\"vet\">\r\n    </div>\r\n    <ion-card-title>\r\n      <ion-card-content class=\"ion-text-center\">Jamille\r\n        <ion-text color=\"dark\">\r\n          <h5>Cardiologista\r\n            <br>\r\n            <ion-icon name=\"time-outline\"></ion-icon>10h - 14h\r\n            segunda a domingo\r\n          </h5>\r\n        </ion-text>\r\n        <h6 class=\"texto\">Especializado no sistema circulatório e no coração. Ele estuda e faz o diagnóstico das\r\n          doenças e anormalidades existentes no órgão responsável por bombear o sangue no corpo.\r\n        </h6>\r\n      </ion-card-content>\r\n    </ion-card-title>\r\n  </ion-card>\r\n\r\n  <ion-card class=card>\r\n    <div class=\"img-wrapper\">\r\n      <img src=\"./assets/vets/6.png\" alt=\"vet\">\r\n    </div>\r\n    <ion-card-title>\r\n      <ion-card-content class=\"ion-text-center\">Livia\r\n        <ion-text color=\"dark\">\r\n          <h5>Endocrinologista\r\n            <br>\r\n            <ion-icon name=\"time-outline\"></ion-icon>10h - 14h\r\n            segunda a sexta\r\n          </h5>\r\n        </ion-text>\r\n        <h6 class=\"texto\">Prevenção, diagnóstico e tratamento de doenças relativas ao metabolismo dos pets, incluindo\r\n          crescimento, desenvolvimento e reprodução.\r\n        </h6>\r\n      </ion-card-content>\r\n    </ion-card-title>\r\n  </ion-card>\r\n\r\n  <ion-card class=card>\r\n    <div class=\"img-wrapper\">\r\n      <img src=\"./assets/vets/2.png\" alt=\"Image\">\r\n    </div>\r\n    <ion-card-title>\r\n      <ion-card-content class=\"ion-text-center\">Marcello\r\n        <ion-text color=\"dark\">\r\n          <h5>Dermatologista\r\n            <br>\r\n            <ion-icon name=\"time-outline\"></ion-icon>10h - 15h\r\n            segunda a quarta\r\n          </h5>\r\n        </ion-text>\r\n        <h6 class=\"texto\">Especializado na prevenção, no diagnóstico e no tratamento de doenças e condições que afetam a\r\n          pele, as unhas e as mucosas.\r\n        </h6>\r\n      </ion-card-content>\r\n    </ion-card-title>\r\n  </ion-card>\r\n\r\n  <ion-card class=card>\r\n    <div class=\"img-wrapper\">\r\n      <img src=\"./assets/vets/5.png\" alt=\"vet\">\r\n    </div>\r\n    <ion-card-title>\r\n      <ion-card-content class=\"ion-text-center\">Leonardo\r\n        <ion-text color=\"dark\">\r\n          <h5>Neurocirurgião\r\n            <br>\r\n            <ion-icon name=\"time-outline\"></ion-icon>10h - 18h\r\n            segunda a sexta\r\n          </h5>\r\n        </ion-text>\r\n        <h6 class=\"texto\">Tratamento de diversas doenças que acometem o sistema nervoso central e periférico, como\r\n          traumas\r\n          crânio-encefálicos, tumores, aneurismas e lesões raqui-medulares.\r\n        </h6>\r\n      </ion-card-content>\r\n    </ion-card-title>\r\n  </ion-card>\r\n\r\n\r\n  <ion-card class=card>\r\n    <div class=\"img-wrapper\">\r\n      <img src=\"./assets/vets/4.png\" alt=\"Image\">\r\n    </div>\r\n    <ion-card-title>\r\n      <ion-card-content class=\"ion-text-center\">Carlos\r\n        <ion-text color=\"dark\">\r\n          <h5>Ortopedista\r\n            <br>\r\n            <ion-icon name=\"time-outline\"></ion-icon>10h - 13h\r\n            segunda a sexta\r\n          </h5>\r\n        </ion-text>\r\n        <p></p>\r\n        <h6 class=\"texto\">Tratamento desde fraturas ósseas simples, até as mais complicadas, que\r\n          necessitam da realização de cirurgias.\r\n        </h6>\r\n      </ion-card-content>\r\n    </ion-card-title>\r\n  </ion-card>\r\n\r\n  <!-- <ion-card>\r\n    <ion-card-content>\r\n      <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n        <img src=\"./assets/clinica/center.jpg\" />\r\n      </div>\r\n      <ion-item-divider></ion-item-divider>\r\n      <ion-text color=\"dark\">\r\n        <h2 style=\"text-align: center\">Nossos profissionais que atuam nas áreas de clínica veterinária e especialidades\r\n          são formados nas melhores Universidades de Medicina Veterinária, com especialização, mestrado e doutorado em\r\n          diversas áreas.\r\n        </h2>\r\n      </ion-text>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n  <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n    <ion-text color=\"dark\">\r\n      <h4>NOSSOS PROFISSIONAIS</h4>\r\n    </ion-text>\r\n  </div>\r\n\r\n  <ion-card color=\"light\">\r\n    <div class=\"img-wrapper\">\r\n      <img src=\"./assets/vets/1.png\" />\r\n    </div>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <h2>Paloma</h2>\r\n      <ion-text color=\"medium\">\r\n        <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n          <ion-icon name=\"information-outline\" color=\"medium\">\r\n          </ion-icon>\r\n          <p>Clinica Geral\r\n          </p>\r\n        </div>\r\n      </ion-text>\r\n      \r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n\r\n  \r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  <ion-card color=\"light\">\r\n    <div class=\"img-wrapper\">\r\n      <img src=\"./assets/vets/2.png\" />\r\n    </div>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <h2>Patrícia</h2>\r\n      <ion-text color=\"medium\">\r\n        <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n          <ion-icon name=\"information-outline\" color=\"medium\">\r\n          </ion-icon>\r\n          <p>Dermatologista\r\n          </p>\r\n        </div>\r\n      </ion-text>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n\r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  <ion-card color=\"light\">\r\n    <div class=\"img-wrapper\">\r\n      <img src=\"./assets/vets/3.png\" />\r\n    </div>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <h2>Jamille</h2>\r\n      <ion-text color=\"medium\">\r\n        <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n          <ion-icon name=\"information-outline\" color=\"medium\">\r\n          </ion-icon>\r\n          <p>Cardiologista\r\n          </p>\r\n        </div>\r\n      </ion-text>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-item-divider></ion-item-divider>\r\n\r\n\r\n  <ion-card color=\"light\">\r\n    <div class=\"img-wrapper\">\r\n      <img src=\"./assets/vets/6.png\" />\r\n    </div>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <h2>Livia</h2>\r\n      <ion-text color=\"medium\">\r\n        <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n          <ion-icon name=\"information-outline\" color=\"medium\">\r\n          </ion-icon>\r\n          <p>Endocrinologista\r\n          </p>\r\n        </div>\r\n      </ion-text>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  <ion-card color=\"light\">\r\n    <div class=\"img-wrapper\">\r\n      <img src=\"./assets/vets/4.png\" />\r\n    </div>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <h2>Leonardo</h2>\r\n      <ion-text color=\"medium\">\r\n        <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n          <ion-icon name=\"information-outline\" color=\"medium\">\r\n          </ion-icon>\r\n          <p>Neurocirurgião\r\n          </p>\r\n        </div>\r\n      </ion-text>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  <ion-card color=\"light\">\r\n    <div class=\"img-wrapper\">\r\n      <img src=\"./assets/vets/5.png\" />\r\n\r\n    </div>\r\n    <ion-card-content class=\"ion-text-center\">\r\n      <h2>Carlos</h2>\r\n      <ion-text color=\"medium\">\r\n        <div style=\"display: flex;\" class=\"ion-justify-content-center\">\r\n          <ion-icon name=\"information-outline\" color=\"medium\">\r\n          </ion-icon>\r\n          <p>Ortopedista\r\n          </p>\r\n        </div>\r\n      </ion-text>\r\n    </ion-card-content>\r\n  </ion-card> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_perfils_perfil_module_ts.js.map