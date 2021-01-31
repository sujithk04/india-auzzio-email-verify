import { Component, OnInit } from '@angular/core';
import {HelperServicesService} from '../services/helper.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-email-verify-link',
  templateUrl: './email-verify-link.component.html',
  styleUrls: ['./email-verify-link.component.css']
})
export class EMailVerifyLinkComponent implements OnInit {

  constructor(private utilityServices: HelperServicesService,
              private router: Router,
              private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
 this.router.navigate([this.router.url]);

 const id = this.actRoute.snapshot.params.verifykey;
 console.log(id);
  }

}
