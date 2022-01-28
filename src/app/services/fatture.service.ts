import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fatture } from '../classes/fatture';
import { IFatture } from '../interfaces/ifatture';
import { IstatoFattura } from '../interfaces/istato-fattura';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http: HttpClient) {}

  getAllFatture(){
    return this.http.get<IFatture>(environment.fatture + '?page=0&size=20&sort=id,ASC');
  }

  getAllStatiFattura(){
    return this.http.get<IstatoFattura>(environment.statoFattura);
  }

  getFatturaById(id: number){
    return this.http.get<Fatture>(environment.fatture + id);
  }

  getFatturaByCliente(id: number){
    return this.http.get<IFatture>(environment.fatture + 'cliente/'+ id +'?page=0&size=20&sort=id,ASC' );
  }

  getFatturaByAnno(anno: number){
    return this.http.get<IFatture>(environment.fatture + 'anno/?anno=' + anno + '&page=0&size=20&sort=id,ASC');
  }

  getFatturaByImporto(fatturatoDa: number, fatturatoA: number) {
    return this.http.get<IFatture>(environment.fatture + 'importo/?from=' + fatturatoDa + '&to=' + fatturatoA + '&page=0&size=20&sort=id,DESC');
  }

  getFatturaByStato(id: number) {
    return this.http.get<IFatture>(environment.fatture + 'stato/' + id + '?page=0&size=20&sort=id,ASC')
  }

  getStatoFattura() {
    return this.http.get<IstatoFattura>(environment.statoFattura)
  }

  creaFattura(fattura: Fatture) {
    return this.http.post<Fatture>(environment.fatture, fattura);
  }

  modificaFattura(id: number, fattura: Fatture) {
    return this.http.put<Fatture>(environment.fatture + id, fattura);
  }

  rimuoviFattura(id: number) {
    return this.http.delete(environment.fatture + id);
  }
}
