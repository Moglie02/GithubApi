import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
/*import { UsersComponent } from './users/users.component';*/
import {  UsersService } from "./users.service";
/*import { NgProgressModule } from '@ngx-progressbar/core';*/
/*import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';*/
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfilesComponent,
    RepositoryComponent,
    ],

  imports: [
  
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,

],
  providers: [UsersService],
  bootstrap: [AppComponent]

})
export class AppModule { }
