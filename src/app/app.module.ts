import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeService } from './service/home.service';
import { LoginService } from './service/login.service';
import {AuthGuard  } from './service/authguard.service';

const appRoutes: Routes=[
  {path: 'login', component: LoginComponent},
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [HomeService, LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
