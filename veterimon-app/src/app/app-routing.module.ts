import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes =  
[ //array com os caminhos do app
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./perfils/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'agendar-consulta', // nome da pagina
    loadChildren: () => import('./agendar-consulta/agendar-consulta.module').then( m => m.AgendarConsultaPageModule)  // onde estão as pastas filhas da pag
  },
  {
    path: 'historico-consultas',
    loadChildren: () => import('./historico-consultas/historico-consultas.module').then( m => m.HistoricoConsultasPageModule)
  },
  {
    path: 'editar-consulta',
    loadChildren: () => import('./editar-consulta/editar-consulta.module').then( m => m.EditarConsultaPageModule)
  }
];
@NgModule(
  {
    imports: 
    [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {}
