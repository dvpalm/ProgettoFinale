import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faUserEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Comuni } from '../classes/comuni';
import { Province } from '../classes/province';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-tabella-comuni',
  templateUrl: './tabella-comuni.component.html',
  styleUrls: ['./tabella-comuni.component.css']
})
export class TabellaComuniComponent implements OnInit {

  constructor(private comuniService: ComuniService, private router: Router, private provinceService: ProvinceService, private modalService: NgbModal) { }

  //FontAwesomeModule
  faUserEdit = faUserEdit;
  faEye = faEye;
  faUserTimes = faUserTimes;

  comuni: Comuni[] = [];
  province: Province[] = [];
  
  nuovoComune: Comuni = new Comuni();
  nuovaProvincia: Province = new Province();

  provinciaModificata!: Province;
  comuneModificato!: Comuni;


  ngOnInit(): void {
    this.comuniService.getAllComuni().subscribe(data => {
      this.comuni = data.content
    });
    this.provinceService.getAllProvince().subscribe(data => {
      this.province = data.content
    });
  }

  // Logica Province

  apriModalProvince(content2: any){
    this.modalService.open(content2, {ariaLabelledBy: 'modal-basic-title-province', size: 'lg',  modalDialogClass: 'animate__bounceIn', centered: true});
  }

  aggiungiProvincia(){
    this.provinceService.aggiungiProvincia(this.nuovaProvincia).subscribe(cliente => { 
      this.provinceService.getAllProvince().subscribe(data => {
        this.province = data.content
      });
     });
    this.modalService.dismissAll();
  }

  apriModalModificaProvince(content4: any, item: Province){
    this.modalService.open(content4, {ariaLabelledBy: 'modal-basic-title-mod-province', size: 'lg',  modalDialogClass: 'animate__bounceIn', centered: true});
    this.provinciaModificata = Object.assign({}, item);
  }

  modificaProvincia() {
    if(this.provinciaModificata.id)
    this.provinceService.modificaProvincia(this.provinciaModificata.id, this.provinciaModificata).subscribe(data => {
      this.provinceService.getAllProvince().subscribe(data => {
        this.province = data.content
      });
    });
    this.modalService.dismissAll();
  }

  rimuoviProvincia(id?: number){
    if(id)
    this.provinceService.rimuoviProvincia(id).subscribe(data => {
      this.provinceService.getAllProvince().subscribe(data => {
        this.province = data.content
      });
    });
  }

 //Logica Comuni

  apriModalComuni(content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg',  modalDialogClass: 'animate__bounceIn', centered: true});
  }

  aggiungiComune(){
    this.comuniService.aggiungiComune(this.nuovoComune).subscribe(cliente => { 
      this.comuniService.getAllComuni().subscribe(data => {
        this.comuni = data.content
      });
     });
    this.modalService.dismissAll();
  }

  apriModalModificaComuni(content3: any, item: Comuni){
    this.modalService.open(content3, {ariaLabelledBy: 'modal-basic-title-mod-comuni', size: 'lg',  modalDialogClass: 'animate__bounceIn', centered: true});
    this.comuneModificato = Object.assign({}, item);
  }

  modificaComune() {
    if(this.comuneModificato.id)
    this.comuniService.modificaComune(this.comuneModificato.id, this.comuneModificato).subscribe(data => {
      this.comuniService.getAllComuni().subscribe(data => {
        this.comuni = data.content
      });
    });
    this.modalService.dismissAll();
  }

  rimuoviComune(id?: number){
    if(id)
    this.comuniService.rimuoviComune(id).subscribe(data => {
      this.comuniService.getAllComuni().subscribe(data => {
        this.comuni = data.content
      });
    });
  }

}
