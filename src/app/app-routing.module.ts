import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliClienteComponent } from './dettagli-cliente/dettagli-cliente.component';
import { DettagliFatturaComponent } from './dettagli-fattura/dettagli-fattura.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NuovoClienteComponent } from './nuovo-cliente/nuovo-cliente.component';
import { TabellaClientiComponent } from './tabella-clienti/tabella-clienti.component';
import { TabellaComuniComponent } from './tabella-comuni/tabella-comuni.component';
import { TabellaFattureComponent } from './tabella-fatture/tabella-fatture.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'clienti', component: TabellaClientiComponent },
  { path: 'clienti/:id/dettagli', component:  DettagliClienteComponent },
  { path: 'clienti/new', component: NuovoClienteComponent },
  { path: 'province&comuni', component:  TabellaComuniComponent },
  { path: 'fatture', component: TabellaFattureComponent },
  { path: 'fatture/:id/dettagli', component: DettagliFatturaComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
