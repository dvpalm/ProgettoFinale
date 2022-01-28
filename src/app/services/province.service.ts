import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Province } from '../classes/province';
import { Iprovince } from '../interfaces/iprovince';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http: HttpClient) { }

  getAllProvince(){
    return this.http.get<Iprovince>(environment.base + 'api/province?page=0&size=20&sort=id,DESC');
  }

  aggiungiProvincia(provincia: Province) {
    return this.http.post<Province>(environment.province, provincia);
  }

  modificaProvincia(id: number, provincia: Province) {
    return this.http.put<Province>(environment.province + id, provincia);
  }

  rimuoviProvincia(id: number) {
    return this.http.delete(environment.province + id);
  }
}
