import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  bearToken = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NjEyNTgwNiwiZXhwIjoxNjQ2OTg5ODA2fQ.DlHJ1wpPLkDwBXzj8187Mgr6gTCHTzU34Xu_4aiQd47eGiqgdUzvsBe6n_XpPBAYzHmsgr_ayOI0xxY-HTEVng"
  tenantID = "fe_0621"



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      { headers: request.headers.set("Authorization", this.bearToken).set("X-TENANT-ID", this.tenantID) }
    )
    return next.handle(myRequest);
  }
}
