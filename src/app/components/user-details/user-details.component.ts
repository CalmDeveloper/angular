import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../interfaces/IUser";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {



  constructor(private activatedRoute:ActivatedRoute,private userService:UserService) {


  }
user:IUser;


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {

      this.userService.getByID(id).subscribe(value => this.user = value);
    });

  }

}
