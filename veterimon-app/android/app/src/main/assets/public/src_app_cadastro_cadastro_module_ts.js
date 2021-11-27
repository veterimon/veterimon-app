(self["webpackChunkveterimon_app"] = self["webpackChunkveterimon_app"] || []).push([["src_app_cadastro_cadastro_module_ts"],{

/***/ 8238:
/*!*****************************************************!*\
  !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPageRoutingModule": () => (/* binding */ CadastroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro.page */ 8824);




const routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_0__.CadastroPage
    }
];
let CadastroPageRoutingModule = class CadastroPageRoutingModule {
};
CadastroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CadastroPageRoutingModule);



/***/ }),

/***/ 2357:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPageModule": () => (/* binding */ CadastroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-routing.module */ 8238);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page */ 8824);







let CadastroPageModule = class CadastroPageModule {
};
CadastroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__.CadastroPageRoutingModule
        ],
        declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_1__.CadastroPage]
    })
], CadastroPageModule);



/***/ }),

/***/ 8824:
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPage": () => (/* binding */ CadastroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cadastro.page.html */ 5525);
/* harmony import */ var _cadastro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page.scss */ 3583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _validators_cpf_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validators/cpf-validator */ 5396);
/* harmony import */ var _validators_compara_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validators/compara-validator */ 426);
/* harmony import */ var _models_Usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Usuario */ 7285);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ 10);










let CadastroPage = class CadastroPage {
    constructor(router, formBuilder, storgeService, route) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.storgeService = storgeService;
        this.route = route;
        this.usuario = new _models_Usuario__WEBPACK_IMPORTED_MODULE_4__.Usuario();
        this.mensagens = {
            nome: [
                { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
                { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
            ],
            cpf: [
                { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
                { tipo: 'invalido', mensagem: 'CPF Inválido.' },
            ],
            email: [
                { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
                { tipo: 'email', mensagem: 'E-mail Inválido.' },
            ],
            senha: [
                { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
                { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
                { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
            ],
            confirmaSenha: [
                { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
                { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
                { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
                { tipo: 'comparacao', mensagem: 'Deve ser igual a Senha.' },
            ],
        };
        this.formCadastro = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3)])],
            cpf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _validators_cpf_validator__WEBPACK_IMPORTED_MODULE_2__.CpfValidator.cpfValido])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email])],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(8)])],
            confirmaSenha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(8)])]
        }, {
            validator: (0,_validators_compara_validator__WEBPACK_IMPORTED_MODULE_3__.comparaValidator)('senha', 'confirmaSenha')
        });
    }
    ngOnInit() {
    }
    voltarPage() {
        this.router.navigate(['tabs/login']);
    }
    salvarCadastro() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Formulário: ', this.formCadastro.valid);
            if (this.formCadastro.valid) {
                this.usuario.nome = this.formCadastro.value.nome;
                this.usuario.cpf = this.formCadastro.value.cpf;
                this.usuario.email = this.formCadastro.value.email;
                this.usuario.senha = this.formCadastro.value.senha;
                yield this.storgeService.set(this.usuario.email, this.usuario);
                this.route.navigateByUrl('tabs/home');
            }
            else {
                alert('Formulário Inválido');
            }
        });
    }
    atualizar() {
        this.router.navigate(['tabs/home']);
        window.location.reload();
    }
};
CadastroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
CadastroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cadastro',
        template: _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cadastro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CadastroPage);



/***/ }),

/***/ 7285:
/*!***********************************!*\
  !*** ./src/app/models/Usuario.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Usuario": () => (/* binding */ Usuario)
/* harmony export */ });
class Usuario {
}


/***/ }),

/***/ 426:
/*!*************************************************!*\
  !*** ./src/app/validators/compara-validator.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comparaValidator": () => (/* binding */ comparaValidator)
/* harmony export */ });
// Validador customizado para comparar dois campos
const comparaValidator = (controleNome, comparacaoNome) => {
    const valida = (formGroup) => {
        // Pega os campos conforme os nomes que foram passados
        const controle = formGroup.controls[controleNome];
        const comparacao = formGroup.controls[comparacaoNome];
        // Verifica se o primeiro campo atende todas as validações
        if (controle.errors) {
            return;
        }
        // Verifica se o campos são iguais
        if (controle.value !== comparacao.value) {
            // Se não for, cria o erro "comparacao"
            comparacao.setErrors({ comparacao: true });
        }
        else {
            // Caso contrário zera os erros.
            comparacao.setErrors(null);
        }
    };
    return valida;
};


/***/ }),

/***/ 5396:
/*!*********************************************!*\
  !*** ./src/app/validators/cpf-validator.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CpfValidator": () => (/* binding */ CpfValidator)
/* harmony export */ });
class CpfValidator {
}
CpfValidator.cpfValido = (control) => {
    // Pega o valor que vem do controlador
    const cpfString = String(control.value).replace(/\D/g, '');
    // Para verificar o digito do cpf
    let rev = 0;
    let add = 0;
    // Verifica tamanho digitado e alguns cpfs que passam na verificação do digito, mas são inválidos
    if (cpfString.length !== 11 ||
        cpfString === '00000000000' ||
        cpfString === '11111111111' ||
        cpfString === '22222222222' ||
        cpfString === '33333333333' ||
        cpfString === '44444444444' ||
        cpfString === '55555555555' ||
        cpfString === '66666666666' ||
        cpfString === '77777777777' ||
        cpfString === '88888888888' ||
        cpfString === '99999999999') {
        // Retorna um objeto contendo uma propriedade para identificar o erro e um valor.
        // esse valor pode ser pego e adicionado a mensagem, porém para esse caso não precisamos.
        return {
            invalido: true,
        };
    }
    // Valida o primeiro digito do CPF
    add = 0;
    for (let i = 1; i <= 9; i++) {
        add += Number(cpfString.substring(i - 1, i)) * (11 - i);
    }
    rev = (add * 10) % 11;
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== Number(cpfString.charAt(9))) {
        return {
            invalido: true,
        };
    }
    // Valida o segundo digito do CPF
    add = 0;
    for (let i = 1; i <= 10; i++) {
        add += Number(cpfString.substring(i - 1, i)) * (12 - i);
    }
    rev = (add * 10) % 11;
    if (rev === 10 || rev === 11) {
        rev = 0;
    }
    if (rev !== Number(cpfString.charAt(10))) {
        return {
            invalido: true,
        };
    }
    // Se tudo der certo e passou nas verificações returna null, ou seja, não possui erros nesse controlador
    return null;
};


/***/ }),

/***/ 3583:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".msg-erro {\n  color: #ff0000;\n  font-size: 10px;\n  clear: both;\n  position: relative;\n}\n\n.vet {\n  font-size: xx-large;\n  font-family: \"Lexend\", sans-serif;\n}\n\nion-text {\n  font-size: medium;\n  font-family: \"Lexend\", sans-serif;\n}\n\nh3 {\n  font-size: medium;\n  font-family: \"Lexend\", sans-serif;\n}\n\nh2 {\n  font-family: \"Lexend\", sans-serif;\n}\n\n.logo-img {\n  width: 80%;\n}\n\n.grid1 {\n  height: 20%;\n  padding: 0px;\n}\n\n.row2 {\n  height: 80%;\n}\n\n.cont-login {\n  width: 80%;\n}\n\nion-icon {\n  margin-right: 15px;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n  font-family: \"Lexend\", sans-serif;\n  border-width: 1px;\n}\n\nion-content {\n  align-items: center;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 2px !important;\n}\n\nion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGlDQUFBO0FBRUo7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGlDQUFBO0FBRUo7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGlDQUFBO0FBRUo7O0FBQ0E7RUFDSSxpQ0FBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoiY2FkYXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1zZy1lcnJvIHtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnZldCB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5pb24tdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGV4ZW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubG9nby1pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmdyaWQxIHtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5cclxuLnJvdzIge1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuXHJcbi5jb250LWxvZ2luIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdMZXhlbmQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ 5525:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\r\n  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@600&display=swap');\r\n</style>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"grid1\">\r\n    <ion-row class=\"row1\">\r\n      <ion-col>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"row2\">\r\n      <ion-col>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  <ion-slide>\r\n    <div class=\"cont-login\">\r\n      <ion-grid>\r\n        <img class=\"logo-img\" src=\"assets/logo/work4.png\">\r\n        <h1 class=\"vet\">Veterimon</h1>\r\n        <ion-row>\r\n          <ion-col>\r\n            <h2>Login</h2>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-list>\r\n              <form [formGroup]=\"formCadastro\">\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Nome</ion-label>\r\n                  <ion-input formControlName=\"nome\"></ion-input>\r\n                  <ng-container *ngFor=\"let erro of mensagens.nome\">\r\n                    <span class=\"msg-erro\"\r\n                      *ngIf=\"formCadastro.get('nome').hasError(erro.tipo) && (formCadastro.get('nome').dirty || formCadastro.get('nome').touched)\">\r\n                      {{ erro.mensagem }}\r\n                    </span>\r\n                  </ng-container>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Cpf</ion-label>\r\n                  <ion-input formControlName=\"cpf\"></ion-input>\r\n                  <ng-container *ngFor=\"let erro of mensagens.cpf\">\r\n                    <span class=\"msg-erro\"\r\n                      *ngIf=\"formCadastro.get('cpf').hasError(erro.tipo) && (formCadastro.get('cpf').dirty || formCadastro.get('cpf').touched)\">\r\n                      {{ erro.mensagem }}\r\n                    </span>\r\n                  </ng-container>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Email</ion-label>\r\n                  <ion-input formControlName=\"email\"></ion-input>\r\n                  <ng-container *ngFor=\"let erro of mensagens.email\">\r\n                    <span class=\"msg-erro\"\r\n                      *ngIf=\"formCadastro.get('email').hasError(erro.tipo) && (formCadastro.get('email').dirty || formCadastro.get('email').touched)\">\r\n                      {{ erro.mensagem }}\r\n                    </span>\r\n                  </ng-container>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Senha</ion-label>\r\n                  <ion-input type=\"password\" formControlName=\"senha\"></ion-input>\r\n                  <ng-container *ngFor=\"let erro of mensagens.senha\">\r\n                    <span class=\"msg-erro\"\r\n                      *ngIf=\"formCadastro.get('senha').hasError(erro.tipo) && (formCadastro.get('senha').dirty || formCadastro.get('senha').touched)\">\r\n                      {{ erro.mensagem }}\r\n                    </span>\r\n                  </ng-container>\r\n                </ion-item>\r\n\r\n                <ion-item>\r\n                  <ion-label position=\"floating\">Confirmar Senha</ion-label>\r\n                  <ion-input type=\"password\" formControlName=\"confirmaSenha\"></ion-input>\r\n                  <ng-container *ngFor=\"let erro of mensagens.confirmaSenha\">\r\n                    <span class=\"msg-erro\"\r\n                      *ngIf=\"formCadastro.get('confirmaSenha').hasError(erro.tipo) && (formCadastro.get('confirmaSenha').dirty || formCadastro.get('confirmaSenha').touched)\">\r\n                      {{ erro.mensagem }}\r\n                    </span>\r\n                  </ng-container>\r\n                </ion-item>\r\n\r\n                <ion-button expand=\"block\" (click)=\"salvarCadastro()\">Salvar</ion-button>\r\n                <ion-button expand=\"block\" (click)=\"voltarPage()\">Voltar</ion-button>\r\n\r\n              </form>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </ion-slide>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_cadastro_cadastro_module_ts.js.map