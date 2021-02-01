import { Component, OnInit } from '@angular/core';
import {HelperServicesService} from '../services/helper.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-email-verify-link',
  templateUrl: './email-verify-link.component.html',
  styleUrls: ['./email-verify-link.component.css']
})
export class EMailVerifyLinkComponent implements OnInit {
  public emailVerifySubscription = Subscription;

  constructor(private utilityServices: HelperServicesService,
              private router: Router,
              private actRoute: ActivatedRoute,
              private matSnackBar:  MatSnackBar) { }

  ngOnInit(): void {
 this.router.navigate([this.router.url]);

 const id = this.actRoute.snapshot.params.verifykey;
 console.log(id);

this.utilityServices.emailVerify(id).subscribe(() => {
  
      const message = "Email is verified.";
     this.matSnackBar.open(message, "dismiss", { duration: 4000, verticalPosition: 'bottom', panelClass: ['green-snackbar'] });

      },
        (err) => {
         const message = "Unable to verify email.";
        this.matSnackBar.open(message, "dismiss", { duration: 4000, verticalPosition: 'bottom', panelClass: ['red-snackbar'] });
         }
        );
   }
// Unsubcribe the suscription handler
ngOnDestroy() {
  //if (this.emailVerifySubscription && !this.emailVerifySubscription.closed) {
   // this.emailVerifySubscription.unsubscribe();
  }

}
