import { Component, OnInit} from '@angular/core';
import {HelperServicesService} from '../services/helper.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-email-verify-link',
  templateUrl: './email-verify-link.component.html',
  styleUrls: ['./email-verify-link.component.css']
})
export class EMailVerifyLinkComponent implements OnInit {
  public emailVerifySubscription: Subscription;
  private emailVerifyToken: string;
  public emailVerified: boolean;
  imgUrl: string;
  public EmailVerificationResult: string;
  public EmailVerificationExplanation: string;
  public isMobileVar: boolean;
  constructor(private verificationAction: HelperServicesService,
              private router: Router,
              private actRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.isMobileVar = this.verificationAction.isMobile();
    this.router.navigate([this.router.url]).then(r => console.log(r));
    const id = this.actRoute.snapshot.params.verifykey;
    // Assign the route parameter as email verification token here
    this.emailVerifyToken =  id;
    this.emailVerified =  false;
    this.EmailVerificationResult = '';
    this.imgUrl = '../../assets/images/coming-sooon.svg';
}

}
