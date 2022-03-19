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

  bearToken = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NzY5NDI0OCwiZXhwIjoxNjQ4NTU4MjQ4fQ.knnjyWlS4wWrrVPni9Roj9Q4eW4U7QbVjwyHIAnVAQqMQMOxZ8z4uPtYa2szn3kE7WyWmjQ6xmPNMTp8E7QTWg"
  tenantID = "fe_0621"



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      { headers: request.headers.set("Authorization", this.bearToken).set("X-TENANT-ID", this.tenantID) }
    )
    return next.handle(myRequest);
  }
}
