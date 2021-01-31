import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EMailVerifyLinkComponent} from './email-verify-link/email-verify-link.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: 'verify/:verifykey', component: EMailVerifyLinkComponent},
  { path: '', redirectTo: '/verify/:verifykey', pathMatch: 'full' },
  { path: '**', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
