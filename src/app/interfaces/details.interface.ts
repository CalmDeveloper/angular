interface IGenres {
    genre_ids:[number]
}
export interface IDetails {
    adult: boolean,
    backdrop_path: string,
    id: string | number,
    original_language: string,
    original_title: string,
    overview:  string,
    popularity: number,
    poster_path: string,
    release_date:string,
    title: string,
    vote_average: number,


    budget: number,
    genres:[number],
    imdb_id:string,
    revenue: number;
    runtime: number
    tagline:number
}

