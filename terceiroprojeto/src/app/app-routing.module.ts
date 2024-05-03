import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';
import { ListarComponent } from './paginas/listar/listar.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'listar', component: ListarComponent

  },
 
  {
    path: 'cadastrar', component: CadastrarComponent
  },
 
  {
    path: '**', component: HomeComponent
  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
