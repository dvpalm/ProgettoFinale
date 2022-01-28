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

  bearToken = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0MzEwMDAzOSwiZXhwIjoxNjQzOTY0MDM5fQ.Ial5XtVLcl2ZbsUMg26niXZq5-iWVGiaqMQXyTEk9WOlK7D_IPuXGH8ws6d5qYafTzbMMXBYMAvdzTlo3bT4TA"
  tenantID = "fe_0621"



  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      { headers: request.headers.set("Authorization", this.bearToken).set("X-TENANT-ID", this.tenantID) }
    )
    return next.handle(myRequest);
  }
}
