import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from "./user-components/users/users.component";
import {UserDetailsComponent} from "./user-components/user-details/user-details.component";
import {UserService} from "./services";
import {UserComponent} from "./user-components/user/user.component";




@NgModule({
    declarations: [
        UsersComponent,
        UserComponent,
        UserDetailsComponent

    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        HttpClientModule
    ],
    exports: [
        UsersComponent
    ],
    providers: [
        UserService
    ]
})
export class UserModule { }
