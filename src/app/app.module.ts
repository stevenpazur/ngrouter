import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Login/Login.component';
import { HomeComponent } from './Home/Home.component';
import { Route, RouterModule } from '@angular/router';
import { NavbarComponent } from './Navbar/Navbar.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { SignUpComponent } from './SignUp/SignUp.component';
import { SubscribeComponent } from './Subscribe/Subscribe.component';
import { SurveyComponent } from './Survey/Survey.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
      NavbarComponent,
      NotFoundComponent,
      SignUpComponent,
      SubscribeComponent,
      SurveyComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
