import { Injectable } from '@angular/core';
import {DeviceDetectorService, DeviceInfo} from 'ngx-device-detector';
@Injectable({
  providedIn: 'root'
})
export class HelperServicesService {
  public isMobileVar: boolean;
  public isDeskTopVar: boolean;
  public isTabletVar: boolean;
  public deviceInfo: DeviceInfo;

  constructor(public deviceService: DeviceDetectorService) { }

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

}
