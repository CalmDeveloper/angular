import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {IMovies} from "../../interfaces/movies.Interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
movies:IMovies[];
  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getAll().subscribe((value) =>this.movies = value.results
    )
  }

}
