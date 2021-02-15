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
  public imageUrlSuccess: string;
  public imageUrlFailure: string;
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
    console.log(id);
    // Assign the route parameter as email verification token here
    this.emailVerifyToken =  id;
    this.emailVerified =  false;
    this.EmailVerificationResult = '';
    this.invokeVerifyEmail();
}

  invokeVerifyEmail() {
 this.emailVerifySubscription = this.verificationAction.emailVerify(this.emailVerifyToken).subscribe(
   (data) => {
     this.emailVerified = true;
     this.imageUrlSuccess  = './assets/images/email_verify_success.svg';
     const successMessage = 'Email has been verified successfully';
     this.EmailVerificationResult = 'Email has been verified successfully';
     this.EmailVerificationExplanation = 'Email has been verified successfully';
     this.matSnackBar.open(successMessage, 'Dismiss', { duration: 3000, panelClass: ['green-snackbar'] });
  },
   (err) => {
     this.emailVerified = false;
     const failureMessage = 'Email verification failed';
     this.EmailVerificationResult = 'Email verification failed';
     this.EmailVerificationExplanation = 'We could not verify your email. Please try later.';
     this.imageUrlFailure  = './assets/images/email_verify_fail.svg';
     this.matSnackBar.open(failureMessage, 'Dismiss', { duration: 3000, panelClass: ['red-snackbar'] });
   }
 );
  }
}
