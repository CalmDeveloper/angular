import {Component, Input, OnInit} from '@angular/core';
import {IUsersDetails} from "../../interfaces";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
@Input()
user:IUsersDetails
  ngOnInit(): void {
  }

}
