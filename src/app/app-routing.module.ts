import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EMailVerifyLinkComponent} from './email-verify-link/email-verify-link.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: 'soon', component: EMailVerifyLinkComponent},
  { path: '', redirectTo: '/soon', pathMatch: 'full' },
  { path: '**', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
