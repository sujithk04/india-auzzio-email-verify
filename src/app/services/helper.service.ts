import { Injectable } from '@angular/core';
import {DeviceDetectorService, DeviceInfo} from 'ngx-device-detector';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HelperServicesService {
  public isMobileVar: boolean;
  public isDeskTopVar: boolean;
  public isTabletVar: boolean;
  public deviceInfo: DeviceInfo;

  constructor(private http: HttpClient, public deviceService: DeviceDetectorService) { }

  // check the current device type
  public detectDevice(): DeviceInfo {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    return this.deviceInfo;
  }

  public isMobile(): boolean {
    this.isMobileVar = this.deviceService.isMobile();
    return this.isMobileVar;
  }

  public isTablet(): boolean {
    this.isTabletVar = this.deviceService.isTablet();
    return this.isTabletVar;
  }

  public isDesktop(): boolean {
    this.isDeskTopVar = this.deviceService.isDesktop();
    return this.isDeskTopVar;
  }
  public emailVerify(verifyToken: string, verifyExpr:string ) {
    // Generate a header object
    let headers = new HttpHeaders();
    headers = headers.append('AuthRequired', 'no');
    const reqParams =  new HttpParams({fromObject: { 'param': verifyToken ,'expr':verifyExpr}});
    // rest of the headers will be appended globally by http interceptors
    // Define a url for api end point
    const emailVerifyURL = 'https://provider.auzzio.com/email/verify';
    // return the http request
    return this.http.post(emailVerifyURL, null, {'headers': headers, params: reqParams, observe: 'response'}) ;
   }

}
