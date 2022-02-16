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

  bearToken = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NDQxODU5NiwiZXhwIjoxNjQ1MjgyNTk2fQ.KZyWz6kvXcefsy64hOKEEPBD1HBQT7w4Wvisu7tWMhWw8iqJrFuer38W44_XXsBJ1rO3jjTUP9p4ygSWRuGqgw"
  tenantID = "fe_0621"



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      { headers: request.headers.set("Authorization", this.bearToken).set("X-TENANT-ID", this.tenantID) }
    )
    return next.handle(myRequest);
  }
}
