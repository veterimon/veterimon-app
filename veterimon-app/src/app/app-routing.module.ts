import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'tab4',
    loadChildren: () => import('./perfils/perfil.module').then(m => m.PerfilPageModule)
  },

  {
    path: 'consultas',
    loadChildren: () => import('./consultas/consulta.module').then(m => m.ConsultaPageModule)  // onde estão as pastas filhas da pag
  },


  {
    path: 'fale-conosco',
    loadChildren: () => import('./fale-conosco/fale-conosco.module').then(m => m.FaleConoscoPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexPageModule)
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
