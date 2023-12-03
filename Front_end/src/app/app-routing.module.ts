import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponentComponent } from './components/add-component/add-component.component';
import { DetailsComponent } from './components/details/details.component';
import { InformacoesComponentComponent } from './components/informacoes-component/informacoes-component.component';


const routes: Routes = [
  { path: 'produtos/add', component: AddComponentComponent },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos/:nome_produto', component: DetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
