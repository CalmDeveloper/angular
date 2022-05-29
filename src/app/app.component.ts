import { Component } from '@angular/core';
import {DataService} from "./services/data.service";
import {IUser} from "./interfaces/user.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:IUser;
constructor(private dataService:DataService) {
dataService.storage.subscribe(value => this.user=value)
}
}
