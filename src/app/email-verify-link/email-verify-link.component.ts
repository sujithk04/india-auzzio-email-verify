import { Component, OnInit, AfterViewInit } from '@angular/core';
import {HelperServicesService} from '../services/helper.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-email-verify-link',
  templateUrl: './email-verify-link.component.html',
  styleUrls: ['./email-verify-link.component.css']
})
export class EMailVerifyLinkComponent implements OnInit, AfterViewInit {
  public emailVerifySubscription: Subscription;
  private emailVerifyToken: string;
  constructor(private verificationAction: HelperServicesService,
              private router: Router,
              private actRoute: ActivatedRoute,
              private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.router.navigate([this.router.url]).then(r => console.log(r));
    const id = this.actRoute.snapshot.params.verifykey;
    console.log(id);
    // Assign the route parameter as email verification token here
    this.emailVerifyToken =  id;
}

  ngAfterViewInit(): void {
 this.emailVerifySubscription = this.verificationAction.emailVerify(this.emailVerifyToken).subscribe(
   (data) => {
     const successMessage = "Email has been verified successfully";
     this.matSnackBar.open(successMessage, "Dismiss", { duration: 3000, panelClass: ['green-snackbar'] })
  },
   (err) => {
     const failureMessage = "Email verification failed";
     this.matSnackBar.open(failureMessage, "Dismiss", { duration: 3000, panelClass: ['red-snackbar'] })
   }
 )
  }
}
