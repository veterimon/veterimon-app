import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'noticia',
        loadChildren: () => import('../noticias/noticia.module').then(m => m.NoticiaPageModule)
      },
      {
        path: 'consulta',
        loadChildren: () => import('../consultas/consulta.module').then(m => m.ConsultaPageModule)
      },
      {
        path: 'mapa',
        loadChildren: () => import('../mapas/mapa.module').then(m => m.MapaPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfils/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/noticia',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/noticia',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
