import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/register/admin/admin.component';
import { PasswordComponent } from './components/password/password.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { PatientComponent } from './components/register/patient/patient.component';
import { ProviderComponent } from './components/register/provider/provider.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyComponent } from './components/dialog-body/dialog-body.component';
import { LogInSuccessComponent} from './components/login-success/login-success.component';
import { HeaderComponent } from './components/login-success/header/header.component';
import { SideMenuComponent } from './components/login-success/side-menu/side-menu.component';
import { AppointmentsComponent } from './components/login-success/provider-dashboard/appointments/appointments.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule } from '@angular/material/slider';
import {HomeComponent} from './components/login-success/provider-dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,
    AdminComponent,
    PatientComponent,
    ProviderComponent,
    DialogBodyComponent,
    PasswordComponent,
    LogInSuccessComponent,
    HeaderComponent,
    SideMenuComponent,
    AppointmentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSliderModule,
    MatSlideToggleModule
   
    
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
