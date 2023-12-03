import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraPesquisaComponentComponent } from './components/barra-pesquisa-component/barra-pesquisa-component.component';
import { InformacoesComponentComponent } from './components/informacoes-component/informacoes-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraPesquisaComponentComponent,
    InformacoesComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
