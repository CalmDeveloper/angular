import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {UserService} from "../../services";
import {IUser} from "../../interfaces";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private route: Router) {
  }

  user: IUser;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.route.getCurrentNavigation()?.extras?.state?.['user'] as IUser
      if (state) {
        this.user = state
      }
      else {
        this.userService.getByID(id).subscribe(value => this.user = value)
      }
    });

  }
}
