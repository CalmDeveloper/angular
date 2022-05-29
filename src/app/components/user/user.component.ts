import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
@Input()
user:IUser;
  @Output()
  userEmmiter = new EventEmitter<IUser>()
  ngOnInit(): void {
  }

    emitt(user: IUser):void {
this.userEmmiter.emit(user)
    }
}
