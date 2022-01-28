import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,  private modalService: NgbModal) { }

  iscrizione: User = new User();
  login: User = new User();

  ngOnInit(): void {
  }

  modalSignUp(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title-mod-province', size: 'lg',  modalDialogClass: 'animate__bounceIn', centered: true});

  }

  signUp(){
    this.userService.signUp(this.iscrizione).subscribe(data => {alert(data)})
    this.iscrizione = new User();
  }

  logga() {
    this.userService.login(this.login).subscribe(data=> {
      alert('Bentornato' + ' ' + data.username + '!'),
      console.log(data);
      this.login = new User();
    })
  }

  // username: testusername pasw: password
}
