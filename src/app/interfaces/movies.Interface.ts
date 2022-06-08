interface IGenres {
    genre_ids:[number]
}
export interface IMovies {
    adult: boolean,
    backdrop_path: string,
    genre_ids: IGenres,
    id: string | number,
    original_language: string,
    original_title: string,
    overview:  string,
    popularity: number,
    poster_path: string,
    release_date:string,
    title: string,
    vote_average: number,
}

