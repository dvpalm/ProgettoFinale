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

  bearToken = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NTIxNzE0NiwiZXhwIjoxNjQ2MDgxMTQ2fQ.s54PpzP87KKD16yfu5XTQICni-TnD9rl5KDg-77GpUsK14Fdb1QBdJ47chhZUX3v8wXUnDaXMB-fccoMBAycHg"
  tenantID = "fe_0621"



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      { headers: request.headers.set("Authorization", this.bearToken).set("X-TENANT-ID", this.tenantID) }
    )
    return next.handle(myRequest);
  }
}
