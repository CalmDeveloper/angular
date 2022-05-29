import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
@Output()
  userEmmit = new EventEmitter<IUser>();
users: IUser[] ;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users=value)
  }


  catchUserEmmit(user: IUser) {
this.userEmmit.emit(user)
  }
}
