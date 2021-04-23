import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { SignUpComponent } from './SignUp/SignUp.component';
import { SubscribeComponent } from './Subscribe/Subscribe.component';
import { SurveyComponent } from './Survey/Survey.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'subscribe',
    component: SubscribeComponent
  },
  {
    path: 'survey',
    component: SurveyComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
