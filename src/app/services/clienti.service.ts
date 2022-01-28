import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Clienti } from '../classes/clienti';
import { Iclienti } from '../interfaces/iclienti';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private http: HttpClient) {}

  getAllClienti(){
    return this.http.get<Iclienti>(environment.base + 'api/clienti?page=0&size=20&sort=id,DESC');
  }

  getClienteById(id: number){
    return this.http.get<Clienti>(environment.clienti + id);
  }

  creaCliente(cliente: Clienti) {
    return this.http.post<Clienti>(environment.clienti, cliente);
  }

  modificaCliente(id: number, cliente: Clienti) {
    // console.log(cliente)
    return this.http.put<Clienti>(environment.clienti + id, cliente);
  }

  remuoviCliente(id: number) {
    return this.http.delete(environment.clienti + id);
  }
  
  getTipiCliente() {
    return this.http.get<string[]>(environment.clienti + 'tipicliente')
  }

  getClientiByRagioneSociale(ragioneSociale: string) {
    return this.http.get<Iclienti>(environment.clienti + 'ragionesociale?nome=' + ragioneSociale)
  }
}
