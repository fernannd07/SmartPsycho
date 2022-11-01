import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'introducao',
    loadChildren: () => import('./introducao/introducao.module').then( m => m.IntroducaoPageModule)
  },
  {
    path: 'pergunta',
    loadChildren: () => import('./pergunta/pergunta.module').then( m => m.PerguntaPageModule)
  },
  {
    path: 'pergunta2',
    loadChildren: () => import('./pergunta2/pergunta2.module').then( m => m.Pergunta2PageModule)
  },
  {
    path: 'pergunta3',
    loadChildren: () => import('./pergunta3/pergunta3.module').then( m => m.Pergunta3PageModule)
  },
  {
    path: 'pergunta4',
    loadChildren: () => import('./pergunta4/pergunta4.module').then( m => m.Pergunta4PageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
