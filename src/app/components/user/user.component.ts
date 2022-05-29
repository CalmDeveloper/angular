import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private dataService:DataService) { }
@Input()
user:IUser;
  ngOnInit(): void {
  }

  save() {
this.dataService.storage.next(this.user)
  }
}
