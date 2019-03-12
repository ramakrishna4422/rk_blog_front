import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent, DialogContentExampleDialog } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule, MatDividerModule, MatListModule, MatIconModule, MatBadgeModule, MatDialogModule} from '@angular/material';
import { PostsService } from './posts.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavigationComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule,
    MatTabsModule, MatDividerModule, MatListModule, MatIconModule, MatBadgeModule, MatDialogModule
  ],
  entryComponents : [DialogContentExampleDialog],
  providers: [AuthService, AuthGuard, PostsService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
