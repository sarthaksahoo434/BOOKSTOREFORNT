import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayBooksComponent } from './components/display-books/display-books.component';
import { DisplayCartComponent } from './components/display-cart/display-cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { AuthGuardGuard } from './services/authGuard/auth-guard.guard';

const routes: Routes =
[
  {path: 'dashboard', component: DashboardComponent,
  children:[
    {
      path: 'displaybooks', component: DisplayBooksComponent
    }
  ]
},
{
  path: 'login-signup', component: LoginSignupComponent,
  children:[
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent} 
  ]
},
{path: 'cart', component: DisplayCartComponent, canActivate: [AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
