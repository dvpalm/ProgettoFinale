import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabellaClientiComponent } from './tabella-clienti/tabella-clienti.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DettagliClienteComponent } from './dettagli-cliente/dettagli-cliente.component';
import { DettagliFatturaComponent } from './dettagli-fattura/dettagli-fattura.component';
import { TabellaFattureComponent } from './tabella-fatture/tabella-fatture.component';
import { NuovoClienteComponent } from './nuovo-cliente/nuovo-cliente.component';
import { InterceptorInterceptor } from './interceptor.interceptor';
import { TabellaComuniComponent } from './tabella-comuni/tabella-comuni.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TabellaClientiComponent,
    HomeComponent,
    DettagliClienteComponent,
    DettagliFatturaComponent,
    TabellaFattureComponent,
    NuovoClienteComponent,
    TabellaComuniComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true, 
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
