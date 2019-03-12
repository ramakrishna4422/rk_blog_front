import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "login", component : LoginComponent},
  {path : "signup", component : SignupComponent},
  {path : 'home', component : HomeComponent, canActivate:[AuthGuard]},
  {path : "**", component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
