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
    },
    {
        path: 'atualizar',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_noticias_atualizar_atualizar_atualizar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./atualizar/atualizar/atualizar.module */ 39)).then(m => m.AtualizarPageModule)
    },
    {
        path: 'nova-duvida',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_noticias_nova-duvida_nova-duvida_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./nova-duvida/nova-duvida.module */ 8419)).then(m => m.NovaPageModule)
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_noticia_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./noticia.page.html */ 6706);
/* harmony import */ var _noticia_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticia.page.scss */ 6473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _noticia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticia.service */ 995);







let NoticiaPage = class NoticiaPage {
    constructor(modalController, router, noticiaService) {
        this.modalController = modalController;
        this.router = router;
        this.noticiaService = noticiaService;
        this.noticia = {
            id: null,
            name: '',
            email: '',
            duvida: ''
        };
    }
    ngOnInit() {
        this.noticiaService.read().subscribe(noticias => {
            this.noticias = noticias;
            console.log(noticias);
        });
    }
    logout() {
        //this.router.navigate(['/login'])
        this.router.navigate(['/login']);
        window.location.replace('/login');
    }
    createProduct() {
        this.noticiaService.create(this.noticia).subscribe(() => {
            this.noticiaService.showMessage('Operação realizada com sucesso');
            window.location.reload();
        });
    }
    deleteProduct() {
        this.noticiaService.delete(this.noticia).subscribe(() => {
            this.noticiaService.showMessage('Operação realizada com sucesso');
            window.location.reload();
        });
    }
};
NoticiaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _noticia_service__WEBPACK_IMPORTED_MODULE_2__.NoticiaService }
];
NoticiaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-noticia',
        template: _raw_loader_noticia_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_noticia_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NoticiaPage);



/***/ }),

/***/ 995:
/*!*********************************************!*\
  !*** ./src/app/noticias/noticia.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticiaService": () => (/* binding */ NoticiaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);



let NoticiaService = class NoticiaService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "http://localhost:3001/duvidas";
    }
    showMessage(msg) {
        console.log(msg);
    }
    create(noticia) {
        return this.http.post(this.baseUrl, noticia);
    }
    read() {
        return this.http.get(this.baseUrl);
    }
    readById(id) {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(this.baseUrl);
    }
    update(noticia) {
        const url = `${this.baseUrl}/${noticia.id}`;
        return this.http.put(url, noticia);
    }
    delete(noticia) {
        const url = `${this.baseUrl}/${noticia.id}`;
        return this.http.delete(url);
    }
};
NoticiaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
NoticiaService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], NoticiaService);



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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-card-header {\n  font-family: \"Lexend\", sans-serif;\n}\n\nh1 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-text {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-button {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-label {\n  margin: 0;\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-title {\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-card {\n  font-family: \"Lexend\", sans-serif;\n}\n\n.ion-justify-content-center {\n  font-size: small;\n  font-weight: lighter;\n}\n\nh3 {\n  font-family: \"Lexend\", sans-serif;\n}\n\nul {\n  line-height: 180%;\n}\n\nli {\n  font-family: \"Lexend\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGljaWEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUU7RUFDRSxTQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFHRTtFQUNFLGlDQUFBO0FBQUo7O0FBR0U7RUFDRSxpQ0FBQTtBQUFKOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQUFGOztBQUlBO0VBQ0UsaUNBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxpQ0FBQTtBQURGIiwiZmlsZSI6Im5vdGljaWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tY2FyZC1oZWFkZXIge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgfVxyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbi5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlciB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5cclxuXHJcbmgzIHtcclxuICBmb250LWZhbWlseTogJ0xleGVuZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaW5lLWhlaWdodDoxODAlO1xyXG59XHJcblxyXG5saSB7XHJcbiAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Veterimon</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<style>\r\n  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap');\r\n</style>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-menu contentId=\"menu\" menuId=\"menu\" side=\"start\" type=\"overlay\">\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title>MENU</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-item button routerLink=\"/tabs/trabalhe-conosco\">\r\n        <br>\r\n        <ion-label> TRABALHE CONOSCO</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item button>\r\n        <br>\r\n        <ion-label (click)=\"logout()\"> LOGOUT</ion-label>\r\n      </ion-item>\r\n\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"menu\"></ion-router-outlet>\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-button menu=\"menu\"></ion-menu-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <style>\r\n    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap');\r\n  </style>\r\n\r\n\r\n      <ion-content>\r\n        <ion-card-content>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col col-6>\r\n                <ion-button fill=\"outline\"  routerLink=\"/tabs/noticia/nova-duvida\"\r\n                  type=\"submit\" expand=\"block\">Nova dúvida</ion-button>\r\n              </ion-col>\r\n              <ion-col col-6>\r\n                <ion-button fill=\"outline\"  routerLink=\"/tabs/noticia/atualizar\"\r\n                  type=\"submit\" expand=\"block\">Editar dúvida</ion-button>\r\n              </ion-col>\r\n              <ion-col col-6>\r\n                <ion-label>Digite o ID</ion-label>\r\n\r\n                <ion-input type=\"id\" required [(ngModel)]=\"this.noticia.id\" name=\"id\"></ion-input>\r\n                \r\n                <ion-button (click)=\"deleteProduct()\" fill=\"outline\" size=\"medium\" type=\"submit\" expand=\"block\">Deletar\r\n                </ion-button>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n          </ion-grid>\r\n\r\n          <!-- <ion-grid>\r\n            <ion-row>   \r\n              <ion-col col-6>\r\n                <ion-label >Digitar</ion-label>\r\n                <ion-input ></ion-input> \r\n              </ion-col> \r\n              <ion-col col-6>\r\n                <ion-button >Buscar</ion-button>\r\n              </ion-col>\r\n            </ion-row>            \r\n          </ion-grid> -->\r\n\r\n\r\n\r\n\r\n          <h3>Todos os comentários</h3>\r\n          <ul>\r\n            <h4>\r\n              <li *ngFor=\"let noticia of noticias\">\r\n                ID: {{ noticia.id }}<br />\r\n                Nome: {{ noticia.name }}<br />\r\n                E-mail: {{ noticia.email }}<br />\r\n                Dúvida: {{ noticia.duvida }}<br />\r\n                <br />\r\n                <br />\r\n              </li>\r\n            </h4>\r\n          </ul>\r\n        </ion-card-content>\r\n      </ion-content>\r\n\r\n\r\n    </ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_noticias_noticia_module_ts.js.map