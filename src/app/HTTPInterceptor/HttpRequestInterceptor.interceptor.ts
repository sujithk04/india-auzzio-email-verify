
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';


@Injectable()

export class HttpRequestInterceptor implements HttpInterceptor {
  key1: string;
  value1: string;
  xapikey: string;

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.key1 = environment.key1;
    this.value1 = environment.value1;
    this.xapikey = environment.xapikey;
    const authheader = 'Basic ' + btoa(this.key1 + ':' + this.value1);
    let headerObj = {
      "x-api-key": this.xapikey,
      Authorization: authheader
    } ;
    return next.handle(httpRequest.clone({ setHeaders: headerObj }));
  }

}
