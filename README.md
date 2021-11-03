## Veterimon

### 🏁 Requisitos

* [VSCode](https://code.visualstudio.com/).
* [Google Chrome](https://www.google.com/chrome/) ou [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)


### 🎲 Instalação

Clone o repositório.

```bash
  git clone https://github.com/veterimon/veterimon-app.git
```

Vá para o diretório do projeto.

```bash
  cd veterimon-app
```

Instale as dependências pelo terminal.

```bash
npm install --save-dev @angular/cli@latest

npm install @angular-devkit/core --save-dev

npm install @angular/storage

npm install @ionic/storage-angular

npm install firebase @angular/fire --save
```

Entre no servidor.

```bash
  ionic serve
```

### 📑 Mudanças de estrutura

```ionic
ionic g page agendar-consulta
ionic g page historico-consultas
ionic g page editar-consulta
ionic g service dados-compartilhados/consulta
  dentro da nova pasta de dados compartilhados > src/app/dados-compartilhados > criar o arquivo consulta.ts
ionic g service dados-armazenados/consulta
  dentro da nova pasta de dados armazenados > src/app/dados-armazenados > criar o arquivo iconsulta.ts
ionic g component formulario
```

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Ionic 5](https://ionicframework.com/)
- [Node.js](https://nodejs.org/en/)
- [Angular](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase](https://firebase.google.com/)

### 🚀 Autores

- [Jamille Bodeo](https://github.com/sothiis)
- [Paloma Regis](https://github.com/Paloma-Regis-Ferreira)
- [Livia Soares Ribeiro](https://github.com/LivsSR)
- [Carlos Oliveira](https://github.com/CarlosDanielSantosOliveira)
- [Leonardo Rodrigues](https://github.com/rodrigues-leo97)
- [Patrícia de Lima Carlos](https://github.com/d-llirium)


### Licença

[MIT](https://choosealicense.com/licenses/mit/)
