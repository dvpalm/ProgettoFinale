import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEye, faUserEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Fatture } from '../classes/fatture';
import { StatoFattura } from '../classes/stato-fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-dettagli-fattura',
  templateUrl: './dettagli-fattura.component.html',
  styleUrls: ['./dettagli-fattura.component.css']
})
export class DettagliFatturaComponent implements OnInit {

   //FontAwesomeModule
   faUserEdit = faUserEdit;
   faEye = faEye;
   faUserTimes = faUserTimes;

  constructor(private route: ActivatedRoute, private fattureService: FattureService, private router: Router, private modalService: NgbModal) { }
  

  fattura: Fatture = new Fatture();
  fatturaModificata: Fatture[] = [];
  statoFattura: StatoFattura[] = [];


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fattureService.getFatturaById(params['id']).subscribe(fattura => {
        this.fattura = fattura, this.fatturaModificata.push(fattura);
      })
    })
    this.fattureService.getStatoFattura().subscribe(data => this.statoFattura = data.content)
  }

  dettagliCliente(id?: number) {
      this.router.navigate(['clienti', id, 'dettagli'])
  }

  openModalModifica(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg',  modalDialogClass: 'animate__bounceIn'});
  }

  modificaFattura(){
    if(this.fatturaModificata[0].id)
    this.fattureService.modificaFattura(this.fatturaModificata[0].id, this.fatturaModificata[0]).subscribe(data => {console.log(data)});
    this.modalService.dismissAll()
  }

  rimuoviFattura(id?: number){
    if(id)
    this.fattureService.rimuoviFattura(id).subscribe(data => {console.log(data)});
    this.router.navigate(['clienti']);
  }

}
