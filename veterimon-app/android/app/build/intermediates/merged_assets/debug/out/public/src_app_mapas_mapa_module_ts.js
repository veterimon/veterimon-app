(self["webpackChunkveterimon_app"] = self["webpackChunkveterimon_app"] || []).push([["src_app_mapas_mapa_module_ts"],{

/***/ 4944:
/*!**********************************************!*\
  !*** ./src/app/mapas/mapa-routing.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPageRoutingModule": () => (/* binding */ MapaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa.page */ 6590);




const routes = [
    {
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_0__.MapaPage,
    }
];
let MapaPageRoutingModule = class MapaPageRoutingModule {
};
MapaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], MapaPageRoutingModule);



/***/ }),

/***/ 7719:
/*!**************************************!*\
  !*** ./src/app/mapas/mapa.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPageModule": () => (/* binding */ MapaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa.page */ 6590);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 4081);
/* harmony import */ var _mapa_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapa-routing.module */ 4944);









let MapaPageModule = class MapaPageModule {
};
MapaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _mapa_page__WEBPACK_IMPORTED_MODULE_0__.MapaPage }]),
            _mapa_routing_module__WEBPACK_IMPORTED_MODULE_2__.MapaPageRoutingModule,
        ],
        declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_0__.MapaPage]
    })
], MapaPageModule);



/***/ }),

/***/ 6590:
/*!************************************!*\
  !*** ./src/app/mapas/mapa.page.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPage": () => (/* binding */ MapaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_mapa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mapa.page.html */ 7592);
/* harmony import */ var _mapa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa.page.scss */ 5562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);





let MapaPage = class MapaPage {
    constructor() {
        this.janelasInfo = [];
        this.marcadores = [
            {
                title: "VETERIMON",
                latitude: "-23.546790743730273",
                longitude: "-46.65230463830273"
            }, // caso abra mais franquias é só adicionar mais marcadores
        ];
    }
    // MÉTODOS
    ionViewDidEnter() {
        this.mostrarMapa();
    }
    mostrarMapa() {
        const local = new google.maps.LatLng(-23.546790743730273, -46.65230463830273);
        const opcoes = {
            center: local,
            zoom: 15,
            desableDefaultUI: true // desativa o controler de zoom
        };
        this.mapa = new google.maps.Map(this.mapRef.nativeElement, opcoes);
        this.adicionarMarcadoresNoMapa(this.marcadores);
    }
    adicionarMarcadoresNoMapa(marcadores) {
        for (let marcador of marcadores) {
            let posicao = new google.maps.LatLng(marcador.latitude, marcador.longitude);
            let marcadorNoMapa = new google.maps.Marker({
                position: posicao,
                title: marcador.title,
                latitude: marcador.latitude,
                longitude: marcador.longitude,
                icon: "https://img.icons8.com/ios-filled/48/000000/pointer.png"
            });
            marcadorNoMapa.setMap(this.mapa);
            this.adicionarInfoAoMarcador(marcadorNoMapa);
        }
    }
    adicionarInfoAoMarcador(marcador) {
        let conteudoDaJanelaInfo = '<div id="content">' +
            '<h2 id="firstHeading" class"firstHeading">' + marcador.title + '</h2>' +
            '<p>Latitude: ' + marcador.latitude + '</p>' +
            '<p> Longitude: ' + marcador.longitude + '</p>' +
            '<ion-button id="navigate">Navigate</ion-button>';
        '</div>';
        let janelaInfo = new google.maps.infoWindow({
            content: conteudoDaJanelaInfo
        });
        marcador.addListener('click', () => {
            this.fecharTodasJanelasInfo();
            janelaInfo.open(this.mapa, marcador);
        });
        this.janelasInfo.push(janelaInfo);
    }
    fecharTodasJanelasInfo() {
        for (let janela of this.janelasInfo) {
            janela.close();
        }
    }
    ngOnInit() {
    }
};
MapaPage.ctorParameters = () => [];
MapaPage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef, static: false },] }]
};
MapaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-mapa',
        template: _raw_loader_mapa_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mapa_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MapaPage);



/***/ }),

/***/ 5562:
/*!**************************************!*\
  !*** ./src/app/mapas/mapa.page.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#mapa {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6Im1hcGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcGF7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiB9XHJcbiAiXX0= */");

/***/ }),

/***/ 7592:
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mapas/mapa.page.html ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Mapa</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div #map id=\"mapa\"></div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n    <ion-text style=\"text-align:center;\">\r\n      <h6>\r\n        <ion-icon name=\"fitness-outline\"></ion-icon> VETERIMON <br>\r\n        <ion-text color=\"dark\">R. Frei Caneca, 390 - Consolação,  <br>\r\n        São Paulo - SP, CEP: 01307-000 </ion-text>\r\n      </h6>\r\n    </ion-text>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mapas_mapa_module_ts.js.map