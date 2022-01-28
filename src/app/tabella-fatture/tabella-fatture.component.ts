import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faUserEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Fatture } from '../classes/fatture';
import { StatoFattura } from '../classes/stato-fattura';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-tabella-fatture',
  templateUrl: './tabella-fatture.component.html',
  styleUrls: ['./tabella-fatture.component.css']
})
export class TabellaFattureComponent implements OnInit {

  constructor(private fattureService: FattureService, private router: Router, private modalService: NgbModal) { }

  fatture: Fatture[] = [];

  anno: Fatture = new Fatture();

  fatturatoDa: Fatture = new Fatture();
  fatturatoA: Fatture = new Fatture()

  //FontAwesomeModule
  faUserEdit = faUserEdit;
  faEye = faEye;
  faUserTimes = faUserTimes;

  ngOnInit(): void {
    this.fattureService.getAllFatture().subscribe(data => {
      this.fatture = data.content;
    })
  }

  dettagli(item: Fatture): void {
    this.router.navigate(['fatture', item.id, 'dettagli']);
  }

  getByAnno(){
    this.fattureService.getFatturaByAnno(this.anno.anno).subscribe(data => {
      this.fatture = data.content;
    });
    this.anno = new Fatture()
  }

  getByImporto() {
    this.fattureService.getFatturaByImporto(this.fatturatoDa.importo, this.fatturatoA.importo).subscribe(data => {
      this.fatture = data.content;
    })
    this.fatturatoDa = new Fatture()
    this.fatturatoA = new Fatture()
  }

  fatturePagate(){
    this.fattureService.getFatturaByStato(1).subscribe(data => {this.fatture = data.content})
  }
  
  fattureNonPagate(){
    this.fattureService.getFatturaByStato(2).subscribe(data => {this.fatture = data.content})
  }
}
