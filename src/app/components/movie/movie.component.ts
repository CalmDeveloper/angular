import {Component, Input, OnInit} from '@angular/core';
import {IMovies} from "../../interfaces/movies.Interface";
import {miniPoster} from "../../urls";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie:IMovies
  posterPath: string|number;


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.posterPath = (miniPoster+this.movie.poster_path)

  }

  movieInfo() {
    this.router.navigate([this.movie.id],
        {
          relativeTo: this.activatedRoute,
          // state: {movie: this.movie.id}
        }).then();
  }
}
