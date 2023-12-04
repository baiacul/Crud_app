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
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';


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
    HttpClientModule,
    CurrencyMaskModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};
