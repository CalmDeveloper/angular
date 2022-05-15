import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IComment} from "../../interfaces/IComment";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
comment:IComment;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value =>{
      let {state:{data}} = history
      this.comment=data
        }
    )
  }

}
