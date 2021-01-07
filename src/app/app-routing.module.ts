import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/register/admin/admin.component';
import { PatientComponent } from './components/register/patient/patient.component';
import { ProviderComponent } from './components/register/provider/provider.component';
import { PasswordComponent } from './components/password/password.component';
import { LogInSuccessComponent} from './components/login-success/login-success.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'admin', component: AdminComponent }  ,
  {path: 'patient', component: PatientComponent },
  {path: 'provider', component:ProviderComponent},
  {path: 'password', component: PasswordComponent},
  {path: 'user', component: LogInSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
