import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import {HeaderComponent} from "./app-components/header/header.component";
import {UserModule} from "./modules/user/user.module";



@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
