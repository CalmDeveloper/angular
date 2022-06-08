import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";
import {RouterModule, Routes} from "@angular/router";
import {MovieInfoComponent} from "./components/movie-info/movie-info.component";



const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      {path: 'movies', component: MoviesComponent},
      {path: 'movies/:id', component: MovieInfoComponent}
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
  ],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
