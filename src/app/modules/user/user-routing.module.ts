import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDetailsComponent} from "./user-components/user-details/user-details.component";
import {UsersComponent} from "./user-components/users/users.component";
import {UsersResolver} from "./resolvers/users.resolver";
import {UserResolver} from "./resolvers/user.resolver";


const routes: Routes = [
  {path:'', component:UsersComponent,resolve:{users:UsersResolver}
      ,children:[
      {path:':id', component:UserDetailsComponent, resolve:{user:UserResolver}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
