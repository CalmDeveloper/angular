import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services";
import {IUsersDetails} from "../../interfaces";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private route: Router) {
  }

  user: IUsersDetails;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.route.getCurrentNavigation()?.extras?.state?.['user'] as IUsersDetails
      if (state) {
        this.user = state
      }
      else {
        this.userService.getByID(id).subscribe(value => this.user = value)
      }
    });

  }
}
