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
        path: 'fale-conosco',
        loadChildren: () => import('../fale-conosco/fale-conosco.module').then(m => m.FaleConoscoPageModule)
      },

      {
        path: 'trabalhe-conosco',
        loadChildren: () => import('../trabalhe-conosco/trabalhe-conosco.module').then(m => m.TrabalheConoscoPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
      },

      {
        path: 'pokedex',
        loadChildren: () => import('../pokedex/pokedex.module').then(m => m.PokedexPageModule)
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
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
