import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loggato } from '../classes/loggato';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signUp(user: User) {
    return this.http.post<User>('http://epicode.online/epicodebeservice_v2/api/auth/signup/', user);
  }

  login(user: User) {
    return this.http.post<Loggato>('http://epicode.online/epicodebeservice_v2/api/auth/login', user)
  }
}
