import {environment} from  "../../environments/environment"
const {API} = environment

export const urls={
    movie:`${API}/discover/movie`,
    genres:`${API}/genre/movie/list`,
    details:`${API}/movie`,
    keywords: `${API}/search/movie`
}
const miniPoster = `https://image.tmdb.org/t/p/w500`
const noFoundImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
const notFoundPageImage = "https://i.stack.imgur.com/6M513.png"
export {miniPoster,noFoundImage,notFoundPageImage}