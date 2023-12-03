import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraPesquisaComponentComponent } from './components/barra-pesquisa-component/barra-pesquisa-component.component';
import { InformacoesComponentComponent } from './components/informacoes-component/informacoes-component.component';
import { AddComponentComponent } from './components/add-component/add-component.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraPesquisaComponentComponent,
    InformacoesComponentComponent,
    AddComponentComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
