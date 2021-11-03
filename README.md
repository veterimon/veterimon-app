# veterimon-app

MUDANÇAS DE ESTRUTURA:
ionic g page agendar-consulta
ionic g page historico-consultas
ionic g page editar-consulta
ionic g service dados-compartilhados/consulta
  dentro da nova pasta de dados compartilhados > src/app/dados-compartilhados > criar o arquivo consulta.ts
ionic g service dados-armazenados/consulta
  dentro da nova pasta de dados armazenados > src/app/dados-armazenados > criar o arquivo iconsulta.ts
ionic g component formulario

INSTALAÇÕES DE INDEPENDÊNCIAS:
  npm install firebase @angular/fire --save
  npm i @ionic/storage-angular
  
 
