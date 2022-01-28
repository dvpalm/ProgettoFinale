import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comuni } from '../classes/comuni';
import { Icomuni } from '../interfaces/icomuni';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) { }

  getAllComuni(){
    return this.http.get<Icomuni>(environment.base + 'api/comuni?page=0&size=20&sort=id,DESC');
  }

  aggiungiComune(comune: Comuni) {
    return this.http.post<Comuni>(environment.comuni, comune);
  }

  modificaComune(id: number, comune: Comuni) {
    return this.http.put<Comuni>(environment.comuni + id, comune);
  }

  rimuoviComune(id: number) {
    return this.http.delete(environment.comuni + id);
  }
}
