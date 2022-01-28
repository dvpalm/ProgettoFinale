import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faUserEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Clienti } from '../classes/clienti';
import { User } from '../classes/user';
import { ClientiService } from '../services/clienti.service';


@Component({
  selector: 'app-tabella-clienti',
  templateUrl: './tabella-clienti.component.html',
  styleUrls: ['./tabella-clienti.component.css']
})
export class TabellaClientiComponent implements OnInit {

  constructor(private clientiService: ClientiService, private router: Router, private modalService: NgbModal) { }

  clienti: Clienti[] = [];
  tipoCliente: any[] = [];
  clienteModificato!: Clienti;
  filtroCerca: Clienti = new Clienti();

  //FontAwesomeModule
  faUserEdit = faUserEdit;
  faEye = faEye;
  faUserTimes = faUserTimes;

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(data => this.clienti = data.content);
    this.clientiService.getTipiCliente().subscribe(data => this.tipoCliente = data)
  }

  dettagli(item: Clienti): void {
    this.router.navigate(['clienti', item.id, 'dettagli']);
  }

  aggiungiCliente() {
    this.router.navigate(['clienti', 'new']);
  }

  open(content: any, item: Clienti) {
    this.clienteModificato = Object.assign({}, item);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', modalDialogClass: 'animate__bounceIn', centered: true });
  }

  modificaCliente() {
    if (this.clienteModificato.id)
      this.clientiService.modificaCliente(this.clienteModificato.id, this.clienteModificato).subscribe(data => {
        this.clientiService.getAllClienti().subscribe(data => this.clienti = data.content);
      });
    this.modalService.dismissAll();
  }

  rimuoviCliente(id?: number) {
    if (id) {
      this.clientiService.remuoviCliente(id).subscribe(data => {
        this.clientiService.getAllClienti().subscribe(data => this.clienti = data.content);
      });
    }

  }

  filtroClienti() {
    this.clientiService.getClientiByRagioneSociale(this.filtroCerca.ragioneSociale).subscribe(data => {
      this.clienti = data.content;
    })
  }

}
