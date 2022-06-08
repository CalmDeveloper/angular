import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MoviesService} from "../../services/movies.service";
import {IMovies} from "../../interfaces/movies.Interface";
import {miniPoster} from "../../urls";
import {IDetails} from "../../interfaces/details.interface";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
 movie:IDetails
  posterPath: string;
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
        // this.moviesService.getDetails(id).subscribe(value => this.movie=value)
      this.moviesService.getDetails(+id).subscribe(value => this.movie=value)
      this.posterPath = (miniPoster+this.movie.poster_path)
        console.log(this.movie.poster_path);


    })
    };

}