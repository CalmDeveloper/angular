import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services";
import {IUsersDetails} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: IUsersDetails[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users=value)
  }

}
