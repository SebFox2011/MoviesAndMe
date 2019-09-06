const API_TOKEN='1a9538af85dc38a3b2ecc64c859fda68';

export function getFilmsfromApiWithSearchedText(text,page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text +'&page='+ page;
    return fetch (url)
        .then((response)=>response.json())
        .catch((error) => console.log(error))
}

export function getImageFromApi (name){
    return 'https://image.tmdb.org/t/p/w300' + name
}