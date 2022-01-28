import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Clienti } from '../classes/clienti';
import { Fatture } from '../classes/fatture';
import { StatoFattura } from '../classes/stato-fattura';
import { ClientiService } from '../services/clienti.service';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-dettagli-cliente',
  templateUrl: './dettagli-cliente.component.html',
  styleUrls: ['./dettagli-cliente.component.css']
})
export class DettagliClienteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private clientiService: ClientiService, private fattureService: FattureService, private router: Router, private modalService: NgbModal) { }

  cliente: Clienti = new Clienti();
  fattura: Fatture[] = [];
  nuovaFattura: Fatture = new Fatture();
  statoFattura: StatoFattura[] = [];
  clienti: Clienti[] = [];



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientiService.getClienteById(params['id']).subscribe(cliente => {
        this.cliente = cliente, this.clienti.push(cliente);
        this.fattureService.getFatturaByCliente(params['id']).subscribe(fattura => {
          this.fattura = fattura.content;
        })
      })
    })
    this.fattureService.getStatoFattura().subscribe(data => this.statoFattura = data.content)
  }

  dettagliFattura(id?: number): void {
    this.router.navigate(['fatture', id, 'dettagli'])
  }

  openModalAggiungiFattura(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg',  modalDialogClass: 'animate__bounceIn' });
    console.log(this.fattura)

  }

  aggiungiFattura() {
    this.modalService.dismissAll();
    this.fattureService.creaFattura(this.nuovaFattura).subscribe(fattura => {

      this.route.params.subscribe(params => {
        this.fattureService.getFatturaByCliente(params['id']).subscribe(fattura => {
          this.fattura = fattura.content;
        })
      })
    })
    this.nuovaFattura = new Fatture()
  }
}
