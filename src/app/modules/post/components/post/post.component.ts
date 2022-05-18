import {Component, Input, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../interfaces/post.interface";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  @Input()
  post: IPost

  ngOnInit(): void {
  }

  navigateMe() {
    this.router.navigate([this.post.id],
        {
          relativeTo: this.activatedRoute,
          state: {post: this.post}
        }).then();
  }
}
