import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interfaces/IPost";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }
@Input()
post:IPost

  ngOnInit(): void {
  }
  navigateMe(post:IPost) {
    this.router.navigate([post.id], {relativeTo: this.activatedRoute, state: {data: post}});
  }
}
