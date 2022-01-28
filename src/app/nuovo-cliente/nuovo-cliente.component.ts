import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { Comuni } from '../classes/comuni';
import { Province } from '../classes/province';
import { Sede } from '../classes/sede';
import { ClientiService } from '../services/clienti.service';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-nuovo-cliente',
  templateUrl: './nuovo-cliente.component.html',
  styleUrls: ['./nuovo-cliente.component.css']
})
export class NuovoClienteComponent implements OnInit {

  constructor(private clientiService: ClientiService, 
    private router: Router, 
    private comuniService: ComuniService,
    private provinceService: ProvinceService,
    ) { }

  comuni: Comuni[] = [];
  province: Province[] = [];
  tipoCliente: string[] = [];

  ngOnInit(): void {
    this.clientiService.getTipiCliente().subscribe(data => this.tipoCliente = data)
    this.comuniService.getAllComuni().subscribe(data => this.comuni = data.content)
    this.provinceService.getAllProvince().subscribe(data => this.province = data.content)
  }

  cliente: Clienti = new Clienti();

  aggiungiCliente() {    
    this.clientiService.creaCliente(this.cliente).subscribe(cliente => { console.log(cliente) });
    this.router.navigate(['clienti']);
    console.log(this.cliente)
  }

}
