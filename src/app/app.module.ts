import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/components/header/header.component';
import { HomeComponent } from './core/components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './core/components/page404/page404.component';
import { AuthinterceptorService } from './shared/services/auth/authinterceptor.service';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthinterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
