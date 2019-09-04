const API_TOKEN='1a9538af85dc38a3b2ecc64c859fda68';

export default function getFilmsfromApiWithSearchedText(Text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch (url)
        .then((response)=>response.json())
        .catch((error) => console.log(error))
}
